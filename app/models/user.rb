# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  name                :string
#  bio                 :string
#  website             :string
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "empty-profile-pic.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :photos,
    class_name: "Photo",
    primary_key: :id,
    foreign_key: :user_id

  has_many :follows_as_follower,
    class_name: "Follow",
    primary_key: :id,
    foreign_key: :follower_id

  has_many :follows_as_followee,
    class_name: "Follow",
    primary_key: :id,
    foreign_key: :followee_id

  has_many :followers,
    through: :follows_as_followee,
    source: :follower

  has_many :followees,
    through: :follows_as_follower,
    source: :followee

  has_many :likes, dependent: :destroy,
    class_name: "Like",
    primary_key: :id,
    foreign_key: :user_id

  has_many :comments, dependent: :destroy,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :user_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
