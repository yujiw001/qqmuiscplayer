(function(window){
    function Progress($progressBar,$progressLine,$progressDot){
        return new Progress.prototype.init($progressBar,$progressLine,$progressDot);
    }
    Progress.prototype = {
        constructor: Progress,
        init: function($progressBar,$progressLine,$progressDot){
            this.$progressBar=$progressBar;
            this.$progressLine=$progressLine;
            this.$progressDot=$progressDot;
        },
        progressClick: function(){
            var $this = this;//此时此刻的this指的是progress，谁调用this指的就是谁
            //监听背景点击
            this.$progressBar.click(function(event){
                 //获取背景距离窗口默认的位置
                 var normalLeft = $(this).offset().left;
                 //获取点击的位置距离窗口的位置
                 var eventLeft = event.pageX;
                 //设置前景的宽度
                 $this.$progressLine.css("width",eventLeft - normalLeft);
                 $this.$progressDot.css("left",eventLeft - normalLeft);
            });
        }
        
    },
    Progress.prototype.init.prototype = Progress.prototype;
    window.Progress =Progress;
})(window);