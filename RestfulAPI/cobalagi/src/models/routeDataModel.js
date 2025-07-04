const supabase = require('../config/supabase');

const routeDataModel = {
    async createRoute(routeData) {
        try {
            const { data, error } = await supabase
                .from('routes')
                .insert([
                    {
                        name: routeData.name,
                        coordinates: routeData.coordinates, // Ini adalah JSONB
                        description: routeData.description,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();

            if (error) throw error;
            return data[0];
        } catch (error) {
            console.error('Error in routeDataModel.createRoute:', error.message);
            throw new Error('Failed to create route: ' + error.message);
        }
    },

    async getAllRoutes() {
        try {
            const { data, error } = await supabase
                .from('routes')
                .select('*');

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error in routeDataModel.getAllRoutes:', error.message);
            throw new Error('Failed to fetch routes: ' + error.message);
        }
    },

    async getRouteById(routeId) {
        try {
            const { data, error } = await supabase
                .from('routes')
                .select('*')
                .eq('id', routeId)
                .single(); // Menggunakan single karena kita harapkan 1 rute berdasarkan ID

            if (error) {
                if (error.code === 'PGRST116') { // Kode error Supabase untuk "tidak ditemukan"
                    return null;
                }
                throw error;
            }
            return data;
        } catch (error) {
            console.error('Error in routeDataModel.getRouteById:', error.message);
            throw new Error('Failed to fetch route by ID: ' + error.message);
        }
    },

    async updateRoute(routeId, routeData) {
        try {
            const { data, error } = await supabase
                .from('routes')
                .update({ ...routeData, updated_at: new Date().toISOString() })
                .eq('id', routeId)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                throw new Error('Route not found for update.');
            }
            return data[0];
        } catch (error) {
            console.error('Error in routeDataModel.updateRoute:', error.message);
            throw new Error('Failed to update route: ' + error.message);
        }
    },

    async deleteRoute(routeId) {
        try {
            const { error } = await supabase
                .from('routes')
                .delete()
                .eq('id', routeId);

            if (error) throw error;
            return { message: 'Route deleted successfully!' };
        } catch (error) {
            console.error('Error in routeDataModel.deleteRoute:', error.message);
            throw new Error('Failed to delete route: ' + error.message);
        }
    }
};

module.exports = routeDataModel;