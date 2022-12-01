class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :languages, :image, :deploy_url, :video_url, :github_url
end
