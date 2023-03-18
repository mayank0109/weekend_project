class CreateReferrals< ActiveRecord::Migration[7.0]
  def up
    create_table :referrals do |t|
      t.string :email,  null: false, default: ""
      t.references :referred_by, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end

  def down 
    drop_table :referrals
  end
end
