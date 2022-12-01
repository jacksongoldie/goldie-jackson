class ProjectsController < ApplicationController
    def index
        render json: Project.all, status: :ok
    end

    def create
        project = Project.create!(project_params)
        render json: project, status: :created
    end 

    def update
        project.update!(project_params)
        render json: project, status: :created
    end

    private

    def project_params
        params.permit(:id, :title, :description, :languages, :image, :deploy_url, :github_url, :video_url)
    end

    def project
        Project.find(project_params[:id])
    end
end
