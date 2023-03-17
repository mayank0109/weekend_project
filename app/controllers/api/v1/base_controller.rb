# frozen_string_literal: true

class Api::V1::BaseController < ApplicationController
  include Authenticable
  include ApiResponders
end