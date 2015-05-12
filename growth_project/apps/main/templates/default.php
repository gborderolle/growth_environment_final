{% load static %}
<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Growth Square1</title>

    <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="http://getbootstrap.com/favicon.ico" rel="icon"/>
    <link href="{% static 'landing_mvp_files/css/normalize.css' %}" rel="stylesheet"/>
    <link href="{% static 'landing_mvp_files/css/style.css' %}" rel="stylesheet"/>

    <script src="http://codepen.io/assets/libs/fullpage/jquery.js"></script>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <script src="{% static 'landing_mvp_files/js/ie-emulation-modes-warning.js' %}"></script>

</head>

<body hola-ext-player="1" class="" gram_dict="true">

<div class="site-wrapper">

    <div class="site-wrapper-inner">

        <div class="container">

            <div class="col-xs-12 col-sm-6 form">

                <ul class="tab-group">
                    <li class="tab active"><a href="#signup">Sign Up</a></li>
                    <li class="tab"><a href="#login">Log In</a></li>
                </ul>

                <div class="tab-content">
                    <div id="signup">
                        <h1 style="color:white">Sign Up for Free</h1>

                        <form action="/accounts/new/" method="post"> {% csrf_token %}

                            <div class="top-row">
                                <div class="field-wrap">
                                    <label>
                                        First Name<span class="req">*</span>
                                    </label>
                                    <input type="text" name="signup_firstname" required autocomplete="off"/>
                                </div>

                                <div class="field-wrap">
                                    <label>
                                        Last Name<span class="req">*</span>
                                    </label>
                                    <input type="text" name="signup_lastname" required autocomplete="off"/>
                                </div>
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Email Address<span class="req">*</span>
                                </label>
                                <input type="email" name="signup_email" required autocomplete="off"/>
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Set a Password<span class="req">*</span>
                                </label>
                                <input type="password" name="signup_password" required autocomplete="off"/>
                            </div>

                            <button type="submit" class="button button-block"/>
                            Get Started</button>

                        </form>
                    </div>

                    <div id="login">
                        <h1 style="color:white">Welcome Back!</h1>

                        <form action="/accounts/auth/" method="post">{% csrf_token %}

                            <div class="field-wrap">
                                <label>
                                    Email Address<span class="req">*</span>
                                </label>
                                <input type="email" name="login_email" required autocomplete="off"/>
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Password<span class="req">*</span>
                                </label>
                                <input type="password" name="login_password" required autocomplete="off"/>
                            </div>

                            <p class="forgot"><a href="{% url 'reset_password_reset1' %}">Forgot Password?</a></p>

                            <button type="submit" class="button button-block"/>
                            Log In</button>

                        </form>
                    </div>
                </div>
                <div class="social-icon-login">

                    <a href="{% url 'social:begin' 'facebook' %}" type="button">
                        <img src=" {% static 'global_files/img/Facebook.png' %}"/>
                    </a>

                    <a href="{% url 'social:begin' 'twitter' %}" type="button">
                        <img src="{% static 'global_files/img/Twitter.png' %}"/>
                    </a>

                    <a href="{% url 'social:begin' 'google-oauth2' %}" type="button">
                        <img src="{% static 'global_files/img/Google.jpg' %}" style="width: 70px;"/>
                    </a>

                    {% if form.errors %}
                        <p class="error">Sorry, that's not a valid username or password</p>
                    {% endif %}

                </div>
            </div>

        </div>

    </div>

    <!-- Placed at the end of the document so the pages load faster -->
    <script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>

    <script src="{% static 'landing_mvp_files/js/jquery.min.js' %} "></script>
    <script src="{% static 'landing_mvp_files/js/bootstrap.min.js' %} "></script>
    <script src="{% static 'landing_mvp_files/js/docs.min.js' %} "></script>
    <script src="{% static 'landing_mvp_files/js/ie10-viewport-bug-workaround.js' %}"></script>
    <script src="{% static 'landing_mvp_files/js/login.js' %} "></script>

    <script type="text/javascript">(function () {
        return window.SIG_EXT = {};
    })()</script>
    <div id="global-zeroclipboard-html-bridge" class="global-zeroclipboard-container" title=""
         style="position: absolute; left: 0px; top: -9999px; width: 15px; height: 15px; z-index: 999999999;"
         data-original-title="Copy to clipboard">
        <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%"
                height="100%">
            <param name="movie" value="/assets/flash/ZeroClipboard.swf?noCache=1422580875624">
            <param name="allowScriptAccess" value="sameDomain">
            <param name="scale" value="exactfit">
            <param name="loop" value="false">
            <param name="menu" value="false">
            <param name="quality" value="best">
            <param name="bgcolor" value="#ffffff">
            <param name="wmode" value="transparent">
            <param name="flashvars"
                   value="trustedOrigins=getbootstrap.com%2C%2F%2Fgetbootstrap.com%2Chttp%3A%2F%2Fgetbootstrap.com">
            <embed src="/assets/flash/ZeroClipboard.swf?noCache=1422580875624" loop="false" menu="false" quality="best"
                   bgcolor="#ffffff" width="100%" height="100%" name="global-zeroclipboard-flash-bridge"
                   allowscriptaccess="sameDomain" allowfullscreen="false" type="application/x-shockwave-flash"
                   wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer"
                   flashvars="trustedOrigins=getbootstrap.com%2C%2F%2Fgetbootstrap.com%2Chttp%3A%2F%2Fgetbootstrap.com"
                   scale="exactfit">
        </object>
    </div>
    <span id="buffer-extension-hover-button"
          style="display: none;position: absolute;z-index: 8675309;width: 100px;height: 25px;background-image: url(chrome-extension://noojglkidnpfjbincgijbaiedldjfbhh/data/shared/img/buffer-hover-icon@2x.png);background-size: 100px 25px;opacity: 0.9;cursor: pointer;"></span>
</div>
</body>
<div class="b-freemium-editor" style="display: none;">
    <div class="b-freemium-editor-back"></div>
    <iframe class="gr-freemium-ifr"></iframe>
</div>
<div class="gr-context gr-dict gr-context-loader gr-dict-freemium" style="display: none;"><span
        class="gr-triangle"></span>

    <div class="gr-placeholder"></div>
    <a href="http://www.grammarly.com/?utm_source=dict&utm_medium=link&utm_campaign=chrome_plg" target="_blank"
       class="gr-hint-settings"></a><strong class="gr-title"></strong>

    <div class="gr-dict-content"></div>
</div>
</html>