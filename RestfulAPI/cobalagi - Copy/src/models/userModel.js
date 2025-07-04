const supabase = require('../config/supabase');

const userModel = {
    async createUserProfile(firebaseUid, email) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: firebaseUid,
                        email: email,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();

            if (error) {
                // Jika error karena ID sudah ada (misal, user sudah terdaftar sebelumnya tapi profil belum dibuat),
                // kita bisa mengabaikannya atau log warning.
                if (error.code === '23505') { // PostgreSQL unique violation code
                    console.warn('Profile for this Firebase UID already exists in Supabase.');
                    return { success: true, message: 'Profile already exists' };
                }
                throw error;
            }
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error in userModel.createUserProfile:', error.message);
            throw new Error('Failed to create user profile in Supabase: ' + error.message);
        }
    },

    async getUserProfile(firebaseUid) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', firebaseUid)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error in userModel.getUserProfile:', error.message);
            throw new Error('Failed to fetch user profile: ' + error.message);
        }
    },

    async updateUserProfile(firebaseUid, profileData) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .update({ ...profileData, updated_at: new Date().toISOString() })
                .eq('id', firebaseUid)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                throw new Error('User profile not found for update.');
            }
            return data[0];
        } catch (error) {
            console.error('Error in userModel.updateUserProfile:', error.message);
            throw new Error('Failed to update user profile: ' + error.message);
        }
    },

    async deleteUserProfile(firebaseUid) {
        try {
            const { error } = await supabase
                .from('profiles')
                .delete()
                .eq('id', firebaseUid);

            if (error) throw error;
            return { message: 'User profile deleted successfully from Supabase.' };
        } catch (error) {
            console.error('Error in userModel.deleteUserProfile:', error.message);
            throw new Error('Failed to delete user profile: ' + error.message);
        }
    }
};

module.exports = userModel;