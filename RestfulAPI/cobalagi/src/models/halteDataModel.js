const supabase = require('../config/supabase');

const halteDataModel = {
    async createHalte(halteData) {
        try {
            const { data, error } = await supabase
                .from('haltes')
                .insert([
                    {
                        name: halteData.name,
                        latitude: halteData.latitude,
                        longitude: halteData.longitude,
                        description: halteData.description,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();

            if (error) throw error;
            return data[0];
        } catch (error) {
            console.error('Error in halteDataModel.createHalte:', error.message);
            throw new Error('Failed to create halte: ' + error.message);
        }
    },

    async getAllHaltes() {
        try {
            const { data, error } = await supabase
                .from('haltes')
                .select('*');

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error in halteDataModel.getAllHaltes:', error.message);
            throw new Error('Failed to fetch haltes: ' + error.message);
        }
    },

    async getHalteById(halteId) {
        try {
            const { data, error } = await supabase
                .from('haltes')
                .select('*')
                .eq('id', halteId)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    return null;
                }
                throw error;
            }
            return data;
        } catch (error) {
            console.error('Error in halteDataModel.getHalteById:', error.message);
            throw new Error('Failed to fetch halte by ID: ' + error.message);
        }
    },

    async updateHalte(halteId, halteData) {
        try {
            const { data, error } = await supabase
                .from('haltes')
                .update({ ...halteData, updated_at: new Date().toISOString() })
                .eq('id', halteId)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                throw new Error('Halte not found for update.');
            }
            return data[0];
        } catch (error) {
            console.error('Error in halteDataModel.updateHalte:', error.message);
            throw new Error('Failed to update halte: ' + error.message);
        }
    },

    async deleteHalte(halteId) {
        try {
            const { error } = await supabase
                .from('haltes')
                .delete()
                .eq('id', halteId);

            if (error) throw error;
            return { message: 'Halte deleted successfully!' };
        } catch (error) {
            console.error('Error in halteDataModel.deleteHalte:', error.message);
            throw new Error('Failed to delete halte: ' + error.message);
        }
    }
};

module.exports = halteDataModel;