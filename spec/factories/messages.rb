# frozen_string_literal: true
FactoryGirl.define do
  factory :message do
    body { Faker::Lorem.sentence }
    sender { Faker::Name.name }
  end
end
