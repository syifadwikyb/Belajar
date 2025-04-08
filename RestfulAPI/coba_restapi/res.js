'use strict';

exports.oke = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    console.log(values)

    res.json(data);
};


exports.okenested = (values, res) => {
    const hasil = values.reduce((acc, item) => {
        const { nama, matakuliah, sks } = item;

        if (!acc[nama]) {
            acc[nama] = {
                nama,
                matakuliah: [],
                total_sks: 0
            };
        }

        acc[nama].matakuliah.push({ matakuliah, sks });
        acc[nama].total_sks += sks;

        return acc;
    }, {});

    res.json({
        status: 200,
        values: hasil
    });
};
