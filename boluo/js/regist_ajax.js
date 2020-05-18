$(function() {
	//给验证码图片注册事件
	/*$("#vcode").click(
			function() {
				// $(this).attr("src","/VerifyCodeServlet?"+Math.random());
				$(this).attr("src",
						"user_ajax/verifyCode?" + new Date().toLocaleString());
			});*/
	
	$("form input[name=username]").blur(
		
		function() {
			var userName = $(this).val();
			if (!formObj.checkNull("username", "用户名不能为空")) {
				$("#username_msg").html("用户名不能为空");
				//this.setMsg("username", "用户名不能为空");
			} else {

				$.ajax({
					url:"http://www.boluo.com/user/checkUserName",
					type:"post",
					data:{"userName":userName},
					dataType:"json",
					success:function(result){

						if (result.status!=200) {
							$("#username_msg").html("用户名已存在");
						} else{
							$("#username_msg").html("<font color='green'>用户名可用</font>");
						}
					},
					error:function(){
						alert("请求失败！");
					}
				});
			}
		});
	//给注册表单注册submit事件
	$("form").submit(function(){
		return register();
	});
});

function register(){

	var userName=$("form input[name=username]").val();
	var userPassword=$("form input[name=password]").val();
	var userPassword2=$("form input[name=password2]").val();
	var userPhone=$("form input[name=phone]").val();
	var userGender=$("form input[name=gender]").val();

	var flag = formObj.checkForm();

	if(flag){
		$.ajax({
			url:"http://www.boluo.com/user/save",
			type:"post",
			data:{
				  "userName":userName,
				  "userPassword":userPassword,
				  "userPhone":userPhone,
				  "userGender":userGender,
				 },
			dataType:"json",
			success:function(result){
				if(result.status==200){
					alert("注册成功,转向登录页面");
					window.location.href="./login.html";
				}else{
					alert(result.message);
				}
			},
			error:function(){
				alert("请求失败！");
			}
		});
	}
	
	return false;
}
var formObj = {
	checkForm : function() {
		var flag = true;

		// 非空验证
		flag = this.checkNull("username", "用户名不能为空!");
		flag = this.checkNull("password", "密码不能为空") && flag;
		flag = this.checkNull("password2", "确认密码不能为空") && flag;
		flag = this.checkNull("phone", "手机号不能为空") && flag;
		flag = this.checkNull("gender", "性别不能为空") && flag;

		// 两次输入的密码是否相同
		flag = this.checkPassword("password", "两次密码不相同") && flag;

		//flag = this.checkUserName() && flag;
		//console.log(this.checkUserName()+"666");
		// 返回flag

		return flag;
	},
	checkNull : function(name, msg) {
		var value = $("input[name=" + name + "]").val();
		if ($.trim(value) == "") {
			this.setMsg(name, msg);
			return false;
		}
		return true;
	},
	checkPassword : function(name, msg) {
		var pwd = $("input[name=" + name + "]").val();
		var pwd2 = $("input[name=" + name + "2]").val();
		if ($.trim(pwd) != "" && $.trim(pwd2) != "") {
			if (pwd != pwd2) {
				this.setMsg(name, msg);
				return false;
			}
		}
		return true;
	},

	checkUserName : function(){

		var userName = $("input[name=" + name + "]").val();

		$.ajax({
			url:"http://www.boluo.com/user/checkUserName",
			type:"post",
			data:{"userName":userName},
			dataType:"json",
			//async: false,
			success:function(result){
				console.log(result.status);
				if (result.status!=200) {
					$("#username_msg").html("用户名已存在");
					//this.setMsg(name,msg);
					return false;
				} else{
					//this.setMsg(name,msg);
					//$("#username_msg").html("<font color='green'>用户名可用</font>");
					return true;

				}
			},
			error:function(){
				alert("请求失败！");
				return false;
			}
		});

	},

	setMsg : function(name, msg) {
		$("#" + name + "_msg").text(msg);
	}
};