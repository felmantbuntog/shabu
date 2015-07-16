class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :firstname
      t.string :lastname
      t.string :phonenumber
      t.string :address
      t.text :address
      t.text :other_info

      t.timestamps null: false
    end
  end
end
