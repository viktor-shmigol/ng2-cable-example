# frozen_string_literal: true
require 'rails_helper'

RSpec.describe V1::MessagesController, type: :controller do
  let!(:message) { create(:message) }
  let(:message_params) { attributes_for(:message) }

  describe '#index' do
    it do
      get :index
      expect(json).not_to be_empty
    end
  end

  describe '#create' do
    it 'successfully create' do
      post :create, params: { message: message_params }
      expect(response).to be_success
    end

    it 'validation failed' do
      post :create, params: { message: { body: '' } }
      expect(response).to have_http_status(422)
    end
  end
end
