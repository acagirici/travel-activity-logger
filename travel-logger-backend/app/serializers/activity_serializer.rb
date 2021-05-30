class ActivitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :city, :state, :description, :rating, :min_age, :image_url, :category_id, :category
end
