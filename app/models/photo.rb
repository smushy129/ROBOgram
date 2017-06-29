# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  caption            :string
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  validates :user, presence: true
  validates :caption, length: { maximum: 140 }

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  has_many :likes, dependent: :destroy,
    class_name: "Like",
    primary_key: :id,
    foreign_key: :photo_id

  has_many :comments, dependent: :destroy,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :photo_id

end
