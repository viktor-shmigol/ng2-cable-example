# frozen_string_literal: true
class Message < ApplicationRecord
  validates :body, :sender, presence: true
end
