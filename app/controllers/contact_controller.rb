# frozen_string_literal: true

class ContactController < ApplicationController
  def index
    render inertia: "ContactPage/ContactPage", props: {
      name: params.fetch(:name, "ContactPage")
    }
  end
end
