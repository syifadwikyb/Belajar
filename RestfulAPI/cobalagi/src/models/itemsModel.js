const supabase = require('../config/supabase');

const itemModel = {
    async createItem(firebaseUid, itemData) {
        try {
            const { data, error } = await supabase
                .from('items')
                .insert([
                    {
                        user_id: firebaseUid,
                        name: itemData.name,
                        description: itemData.description,
                        created_at: new Date().toISOString()
                    }
                ])
                .select();

            if (error) throw error;
            return data[0];
        } catch (error) {
            console.error('Error in itemModel.createItem:', error.message);
            throw new Error('Failed to create item: ' + error.message);
        }
    },

    async getItemsByUser(firebaseUid) {
        try {
            const { data, error } = await supabase
                .from('items')
                .select('*')
                .eq('user_id', firebaseUid);

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error in itemModel.getItemsByUser:', error.message);
            throw new Error('Failed to fetch items: ' + error.message);
        }
    },

    async getSingleItem(itemId, firebaseUid) {
        try {
            const { data, error } = await supabase
                .from('items')
                .select('*')
                .eq('id', itemId)
                .eq('user_id', firebaseUid)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error in itemModel.getSingleItem:', error.message);
            throw new Error('Failed to fetch item: ' + error.message);
        }
    },

    async updateItem(itemId, firebaseUid, itemData) {
        try {
            const { data, error } = await supabase
                .from('items')
                .update({ ...itemData, updated_at: new Date().toISOString() })
                .eq('id', itemId)
                .eq('user_id', firebaseUid)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                throw new Error('Item not found or you do not have permission to update it.');
            }
            return data[0];
        } catch (error) {
            console.error('Error in itemModel.updateItem:', error.message);
            throw new Error('Failed to update item: ' + error.message);
        }
    },

    async deleteItem(itemId, firebaseUid) {
        try {
            const { error } = await supabase
                .from('items')
                .delete()
                .eq('id', itemId)
                .eq('user_id', firebaseUid);

            if (error) throw error;
            return { message: 'Item deleted successfully!' };
        } catch (error) {
            console.error('Error in itemModel.deleteItem:', error.message);
            throw new Error('Failed to delete item: ' + error.message);
        }
    }
};

module.exports = itemModel;