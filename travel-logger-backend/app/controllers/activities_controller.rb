class ActivitiesController < ApplicationController
    def index
        activities = Activity.all
        render json: ActivitySerializer.new(activities)
    end

    def show
        activity = Activity.find(params[:id])
        render json: activity, status: 200
    end
    
    def create
        activity = Activity.new(activity_params)
        if activity.save
            render json: activity, status: 200
        else
            render json: {errors: activity.errors.full_messages}, status: 404
        end      
    end

    def update
        activity = Activity.find(params[:id])
        activity.update(note_params)
        if activity.save
            render json: activity, status: 200
        else
            render json: {errors: activity.errors.full_messages}, status: 404
        end 
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        render json: activity, status: 200
    end

    private

    def activity_params
        params.require(:activity).permit(:title, :city, :state, :description, :rating, :min_age, :image_url, :category_id)
    end
end
