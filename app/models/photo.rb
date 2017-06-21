# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  caption    :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ActiveRecord::Base
end
