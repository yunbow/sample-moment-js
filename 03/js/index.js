(function () {

    $(function () {

        var columnList = [
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
        ];

        $('#timezoneTable').bootstrapTable({
            columns: columnList,
            data: getTimezoneList()
        });

    });

    function getTimezoneList() {

        var ex1 = moment().utc().format();
        var ex2 = moment().tz('Asia/Tokyo').format();

        var resultList = [
            {
                id: 1,
                code: 'moment().utc()',
                example: ex1,
            },
            {
                id: 2,
                code: "moment().tz('Asia/Tokyo')",
                example: ex2,
            },
        ];

        return resultList;
    }

})();