FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/ヨークシャ.jpg")
    user
    group
  end
end