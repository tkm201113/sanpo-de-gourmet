class AddDeviseToUsers < ActiveRecord::Migration[7.1]
  def up
    change_table :users do |t|
      unless column_exists? :users, :encrypted_password
        t.string :encrypted_password, null: false, default: ""
      end

      unless column_exists? :users, :reset_password_token
        t.string :reset_password_token
        t.datetime :reset_password_sent_at
      end

      unless column_exists? :users, :remember_created_at
        t.datetime :remember_created_at
      end
    end

    add_index :users, :reset_password_token, unique: true unless index_exists?(:users, :reset_password_token)
  end

  def down
    remove_index :users, :reset_password_token if index_exists?(:users, :reset_password_token)
    change_table :users do |t|
      t.remove :encrypted_password if column_exists? :users, :encrypted_password
      t.remove :reset_password_token, :reset_password_sent_at if column_exists? :users, :reset_password_token
      t.remove :remember_created_at if column_exists? :users, :remember_created_at
    end
  end
end
