const supabase = require("../config/supabase");

// 1. Mengambil semua data tasks dengan dukungan search dan filter status
const findAllTasks = async (search, status) => {
    let query = supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });

    // Filter berdasarkan status ('pending' atau 'completed')
    if (status) {
        query = query.eq("status", status);
    }

    // Search berdasarkan title atau description
    if (search) {
        query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
        throw error;
    }

    return data;
};

// 2. Mengambil satu task berdasarkan ID
const findTaskById = async (id) => {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw error;
    }

    return data;
};

// 3. Menambahkan task baru ke database
const createTask = async (taskData) => {
    const { data, error } = await supabase
        .from("tasks")
        .insert([taskData])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

// 4. Mengubah data task berdasarkan ID
const updateTask = async (id, taskData) => {
    const { data, error } = await supabase
        .from("tasks")
        .update({
            ...taskData,
            updated_at: new Date().toISOString()
        })
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

// 5. Menghapus task berdasarkan ID
const deleteTask = async (id) => {
    const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

module.exports = {
    findAllTasks,
    findTaskById,
    createTask,
    updateTask,
    deleteTask
};
