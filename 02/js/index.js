(function () {

    $(function () {

        $('#langTable').bootstrapTable({
            columns: [
                {
                    field: 'id',
                    title: 'No',
                    width: '30px'
                },
                {
                    field: 'code',
                    title: 'Code'
                },
                {
                    field: 'example',
                    title: 'Example'
                }
            ]
        });

        $('#lang').on('change', function () {
            var lang = $('#lang').val();
            moment.locale(lang);
            $('#langTable').bootstrapTable('load', getLangList());
        });

        moment.locale('en');
        $('#langTable').bootstrapTable('load', getLangList());
    });

    function getLangList() {

        var ex1 = moment();
        var ex2 = moment().format('YYYY-MM-DD(dddd) a');
        var ex3 = moment('2018-12-25', 'YYYY-MM-DD').fromNow();
        var ex4 = moment('2018-12-25', 'YYYY-MM-DD').calendar();

        var resultList = [
            {
                id: 1,
                code: 'moment()',
                example: ex1,
            },
            {
                id: 2,
                code: "moment().format('YYYY-MM-DD(dddd) a')",
                example: ex2,
            },
            {
                id: 3,
                code: "moment('2018-12-25', 'YYYY-MM-DD').fromNow()",
                example: ex3,
            },
            {
                id: 4,
                code: "moment('2018-12-25', 'YYYY-MM-DD').calendar()",
                example: ex4,
            }
        ];

        return resultList;
    }

})();