class AddReferredByColumnToUsers < ActiveRecord::Migration[7.0]
  def up
    add_reference :users, :referred_by, index: true
  end

  def down
    remove_reference :users, :referred_by
  end
end
