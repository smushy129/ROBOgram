class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string   "body",       null: false
      t.integer  "user_id",    null: false
      t.integer  "photo_id",   null: false

      t.timestamps null: false
    end

    add_index :comments, :user_id
    add_index :comments, :photo_id
  end
end
