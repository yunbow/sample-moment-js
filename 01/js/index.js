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

        $('#inputTable').bootstrapTable({
            columns: columnList,
            data: getInputList()
        });

        $('#outputTable').bootstrapTable({
            columns: columnList,
            data: getOutputList()
        });

        $('#calcTable').bootstrapTable({
            columns: columnList,
            data: getCalcList()
        });

        $('#compareTable').bootstrapTable({
            columns: columnList,
            data: getCompareList()
        });
    });

    function getInputList() {

        var ex1 = moment();
        var ex2 = moment().toDate();
        var ex3 = moment().toJSON();
        var ex4 = moment().format();
        var ex5 = moment().format('YYYY-MM-DD');
        var ex6 = moment().get('month');

        var resultList = [
            {
                id: 1,
                code: 'moment()',
                example: ex1,
            },
            {
                id: 2,
                code: 'moment().toDate()',
                example: ex2,
            },
            {
                id: 3,
                code: 'moment().toJSON()',
                example: ex3,
            },
            {
                id: 4,
                code: 'moment().format()',
                example: ex4,
            },
            {
                id: 5,
                code: "moment().format('YYYY-MM-DD')",
                example: ex5,
            },
            {
                id: 6,
                code: "moment().get('month')",
                example: ex6,
            },
        ];

        return resultList;
    }

    function getOutputList() {

        var ex1 = moment('2018-12-25T01:30:00.123Z').format();
        var ex2 = moment('2018-12-25', 'YYYY-MM-DD').format();
        var ex3 = moment({
            year: 2018,
            month: 11,
            day: 25,
            hour: 1,
            minute: 30,
            second: 0,
            millsecond: 123
        }).toJSON();
        var ex4 = moment('2018-12-25', 'YYYY-MM-DD').isValid();
        var ex5 = moment('xxx', 'YYYY-MM-DD').isValid();
        var ex6 = moment('2018-12-25', 'YYYY-MM-DD').set('month', 0).format();
        var ex7 = moment('2018-12-25', 'YYYY-MM-DD').startOf('month').format();
        var ex8 = moment('2018-12-25', 'YYYY-MM-DD').endOf('month').format();

        var resultList = [
            {
                id: 1,
                code: "moment('2018-12-25T01:30:00.123Z')",
                example: ex1,
            },
            {
                id: 2,
                code: "moment('2018-12-25', 'YYYY-MM-DD')",
                example: ex2,
            },
            {
                id: 3,
                code: 'moment({year:2018,month:11,day:25,hour:1,minute:30,second:0,millsecond:123})',
                example: ex3,
            },
            {
                id: 4,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isValid()",
                example: ex4,
            },
            {
                id: 5,
                code: "moment('xxx', 'YYYY-MM-DD').isValid()",
                example: ex5,
            },
            {
                id: 6,
                code: "moment('2018-12-25', 'YYYY-MM-DD').set('month', 0)",
                example: ex6,
            },
            {
                id: 7,
                code: "moment('2018-12-25', 'YYYY-MM-DD').startOf('month')",
                example: ex7,
            },
            {
                id: 8,
                code: "moment('2018-12-25', 'YYYY-MM-DD').endOf('month')",
                example: ex8,
            },
        ];

        return resultList;
    }

    function getCalcList() {

        var ex1 = moment().add(1, 'months').format();
        var ex2 = moment().subtract(1, 'months').format();
        var ex3 = moment('2018-12-25', 'YYYY-MM-DD').diff(moment('2017-12-25', 'YYYY-MM-DD'), 'days');

        var resultList = [
            {
                id: 1,
                code: "moment().add(1, 'months')",
                example: ex1,
            },
            {
                id: 2,
                code: "moment().subtract(1, 'months')",
                example: ex2,
            },
            {
                id: 3,
                code: "moment('2018-12-25', 'YYYY-MM-DD').diff(moment('2017-12-25', 'YYYY-MM-DD'), 'days')",
                example: ex3,
            },
        ];

        return resultList;
    }


    function getCompareList() {

        var ex1 = moment('2018-12-25', 'YYYY-MM-DD').isSame(moment('2018-12-25', 'YYYY-MM-DD'), 'month');
        var ex2 = moment('2018-12-25', 'YYYY-MM-DD').isBefore(moment('2019-01-25', 'YYYY-MM-DD'), 'month');
        var ex3 = moment('2018-12-25', 'YYYY-MM-DD').isAfter(moment('2018-11-25', 'YYYY-MM-DD'), 'month');
        var ex4 = moment('2018-12-25', 'YYYY-MM-DD').isSameOrBefore(moment('2018-12-25', 'YYYY-MM-DD'), 'month');
        var ex5 = moment('2018-12-25', 'YYYY-MM-DD').isSameOrAfter(moment('2018-12-25', 'YYYY-MM-DD'), 'month');
        
        var resultList = [
            {
                id: 1,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isSame(moment('2018-12-25', 'YYYY-MM-DD'), 'month')",
                example: ex1,
            },
            {
                id: 2,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isBefore(moment('2019-01-25', 'YYYY-MM-DD'), 'month')",
                example: ex2,
            },
            {
                id: 3,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isAfter(moment('2018-11-25', 'YYYY-MM-DD'), 'month')",
                example: ex3,
            },
            {
                id: 4,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isSameOrBefore(moment('2018-12-25', 'YYYY-MM-DD'), 'month')",
                example: ex4,
            },
            {
                id: 5,
                code: "moment('2018-12-25', 'YYYY-MM-DD').isSameOrAfter(moment('2018-12-25', 'YYYY-MM-DD'), 'month')",
                example: ex5,
            },
        ];

        return resultList;
    }

})();