# frozen_string_literal: true
class V1::BaseController < ApplicationController
  private

  def render_api(object, status = :ok)
    if object.respond_to?(:errors) && object.errors.present?
      render json: { error: { status: 422, message: object.errors.full_messages.to_sentence,
                              errors: object.errors } }, status: 422
    else
      render json: object, status: status
    end
  end
end
