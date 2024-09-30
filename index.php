<?php
include("admin/conf/config.php");
/* Persisit System Settings On Brand */
$ret = "SELECT * FROM `iB_SystemSettings` ";
$stmt = $mysqli->prepare($ret);
$stmt->execute(); //ok
$res = $stmt->get_result();
while ($sys = $res->fetch_object()) {

?>
<!doctype html>
<html lang=en-US>

<head>
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MZWDD65');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Brian Gatarwa, Moturi George">
    <link rel=profile href=https://gmpg.org/xfn/11>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'>
    <title>Damey Bank </title>
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="I&amp;M Group PLC - Eastern Africa&#039;s Leading Financial Partner for Growth">
    <meta property="og:description" content="I&amp;M Group PLC. We are a leading financial banking group in Eastern Africa with a presence in Kenya, Mauritius, Rwanda, Tanzania and Uganda.">

    <link rel=stylesheet id=wp-block-library-css href='script/css/dist/block-library/style.min.css?ver=0a674a85ab0c7d18feaab2def6bec71d' media=all>
    <link rel=stylesheet id=imbank_landing-style-css href='img/themes/imbank_landing/style.css?ver=1.0.0' media=all>
    <link rel=stylesheet id=imbank-library-css href='/img/themes/imbank_landing/assets/css/library.css?ver=1.0.0' media=all>
    <link rel=stylesheet id=imbank-core-css href='img/themes/imbank_landing/assets/css/core-styles.css?ver=1.0.0' media=all>
    <script src='script/js/jquery/jquery.min.js?ver=3.6.0' id=jquery-core-js></script>
    <link rel="stylesheet" href="scripts/swiper-bundle.min.css" />
<script src="scripts/swiper-bundle.min.css"></script>
    <!-- <script src="dist/js/bundle.js"></script> -->
    <link rel=https://api.w.org/ href=  /wp-json/>
    <link rel=alternate type=application/json href=  /wp-json/wp/v2/pages/2>
    <link rel=EditURI type=application/rsd+xml title=RSD href=  /xmlrpc.php?rsd>
    <link rel=wlwmanifest type=application/wlwmanifest+xml href=  /script/wlwmanifest.xml>
  
    <link rel=alternate type=application/json+oembed href="  /wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.imbankgroup.com%2F">
    <link rel=alternate type=text/xml+oembed href="  /wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.imbankgroup.com%2F&#038;format=xml">
   
    <link rel=icon href="img/bank.png" sizes=32x32>
    <link rel=icon href="img/bank.png" sizes=192x192>
    <link rel=apple-touch-icon href="img/bank.png">
    <meta name="msapplication-TileImage" content="img/bank.png">
    <style id=wp-custom-css>
        

        .page-header .navbar-brand {
            width: 250px
        }
    </style>
</head>

<body class="home page-template page-template-page-templates page-template-home-page page-template-page-templateshome-page-php page page-id-2 wp-custom-logo" style="overflow-x: hidden;">
    <noscript><iframe
src="https://www.googletagmanager.com/ns.html?id=GTM-MZWDD65"
height=0 width=0 style=display:none;visibility:hidden></iframe></noscript>
    <main id=page-wrap>
        <section id=page-wrap-in>
            <header class="page-header sticky-header page-header-no-rows ">
                <div class="half-bg-cont w-50 h-100 position-absolute top-0 left-0 z-index-1  ">
                    <div class="half-bg w-100 h-100 bg-blue"></div>
                </div>
                <div class="container position-relative z-index-2">
                    <div class="skewed-right-side-cont z-index-1">
                        <div class="skewed-right-side-bg bg-blue"></div>
                        <div class="skewed-right-el bg-blue"></div>
                    </div>
    <div class="row position-relative z-index-2">
    <div class="col d-flex justify-content-between align-items-center">
        <a class="navbar-brand p-0" href="#">
            <img src="img/dameybank.png" alt="" style="margin-right:5px;">
        </a>
        <nav class="main-nav">
            <ul id="menu-primary-menu" class="d-flex align-items-center flex-row">
                <li id="menu-item-13086" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-13086"><a href="index.php" aria-current="page">Home</a></li>
                <li id="menu-item-12512" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-12512"><a href="#">About Us</a>
                    <ul class="sub-menu">
                        <li id="menu-item-14747" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-14747"><a href="about.html">Who We Are</a></li>
                    </ul>
                </li>
                <li id="menu-item-12513" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12513"><a href="board.html">Board of Directors</a></li>
                <li id="menu-item-13342" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13342"><a href="foundation.html">Foundation</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-loginas">
                    <div class="dropdown">
                        <button class="dropbtn">LoginAS</button>
                        <div class="dropdown-content">
                            <a href="admin/pages_index.php">Manager</a>
                            <a href="client/pages_client_index.php">Customer</a>
                            <a href="staff/pages_staff_index.php">Staff</a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <span class="quick-menu-trigger cursor-pointer text-primary ml-5"><i class="bi bi-filter-right"></i></span>
    </div>
</div>
            </header>
            <style>
                .body{
                    overflow-x: hidden;
                }
                /* Dropdown Button */
                .bg-blue{
                    background-color: white;

                }
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px;
}

/* Links inside the Dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 5px;
}
.custom-navbar {
    background-color: red; 
}

.dropdown-content a:hover {background-color: red;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #2980b9;}

            </style>
            <section class="hero-section page-section">
                <div class="swiper-container js-slider hero-section-slider position-relative z-index-1">
                    <div class=swiper-wrapper>
                        <div class="swiper-slide position-relative">
                            <div class=swiper-slide-in>
                                <figure class="hero-section-slider-img overflow-hidden">
                                    <div class="hero-section-slider-img-in bg-img">
                                        <img src="img/nairobi.jpg" alt loading=defer></div>
                                </figure>
                                <div class="hero-section-slider-txt position-absolute centered-y left-0 w-100">
                                    <div class=container>
                                        <div class=row>
                                            <div class=col>
                                                <div class=hero-section-slider-txt-in>
                                                    <h1 class="hero-section-slider-txt-title d-flex flex-column align-items-center text-center text-white font-weight-normal">
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-medium" data-aos=fade-up data-aos-duration=800>
                                                            <span class=hero-section-slider-txt-title-block-txt>Welcome To</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-large mb-3" data-aos=fade-up data-aos-duration=800
                                                            data-aos-delay=100>
                                                            <span class=hero-section-slider-txt-title-block-txt>Damey Bank Group </span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-small d-flex align-items-center"
                                                            data-aos=fade-up data-aos-duration=800 data-aos-delay=150>
                                                            <span class="hr-line bg-white mr-4"></span>
                                                            <!-- <span class="hero-section-slider-txt-title-block-txt flex-grow-1">Eastern Africa's Leading Financial Partner for Growth</span></div> -->
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide position-relative">
                            <div class=swiper-slide-in>
                                <figure class="hero-section-slider-img overflow-hidden">
                                    <div class="hero-section-slider-img-in bg-img">
                                        <img src="img/ethiopia.jpg" alt loading=defer></div>
                                </figure>
                                <div class="hero-section-slider-txt position-absolute centered-y left-0 w-100">
                                    <div class=container>
                                        <div class=row>
                                            <div class=col>
                                                <div class=hero-section-slider-txt-in>
                                                    <h1 class="hero-section-slider-txt-title d-flex flex-column align-items-center text-center text-white font-weight-normal">
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-medium" data-aos=fade-up data-aos-duration=800>
                                                            <span class=hero-section-slider-txt-title-block-txt>Welcome To</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-large mb-3" data-aos=fade-up data-aos-duration=800
                                                            data-aos-delay=100>
                                                            <span class=hero-section-slider-txt-title-block-txt>Damey Bank Group</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-small d-flex align-items-center"
                                                            data-aos=fade-up data-aos-duration=800 data-aos-delay=150>
                                                            <span class="hr-line bg-white mr-4"></span>
                                                            <!-- <span class="hero-section-slider-txt-title-block-txt flex-grow-1">Damey Bank Headquarters, Kenya</span></div> -->
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide position-relative">
                            <div class=swiper-slide-in>
                                <figure class="hero-section-slider-img overflow-hidden">
                                    <div class="hero-section-slider-img-in bg-img">
                                        <img src="img/uganda.jpg" alt loading=defer></div>
                                </figure>
                                <div class="hero-section-slider-txt position-absolute centered-y left-0 w-100">
                                    <div class=container>
                                        <div class=row>
                                            <div class=col>
                                                <div class=hero-section-slider-txt-in>
                                                    <h1 class="hero-section-slider-txt-title d-flex flex-column align-items-center text-center text-white font-weight-normal">
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-medium" data-aos=fade-up data-aos-duration=800>
                                                            <span class=hero-section-slider-txt-title-block-txt>Welcome To</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-large mb-3" data-aos=fade-up data-aos-duration=800
                                                            data-aos-delay=100>
                                                            <span class=hero-section-slider-txt-title-block-txt>Damey Bank Group</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-small d-flex align-items-center"
                                                            data-aos=fade-up data-aos-duration=800 data-aos-delay=150>
                                                            <span class="hr-line bg-white mr-4"></span>
                                                            <!-- <span class="hero-section-slider-txt-title-block-txt flex-grow-1">Damey Bank Tower, Kenya</span></div> -->
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide position-relative">
                            <div class=swiper-slide-in>
                                <figure class="hero-section-slider-img overflow-hidden">
                                    <div class="hero-section-slider-img-in bg-img">
                                        <img src="img/Somali.jpg" alt loading=defer></div>
                                </figure>
                                <div class="hero-section-slider-txt position-absolute centered-y left-0 w-100">
                                    <div class=container>
                                        <div class=row>
                                            <div class=col>
                                                <div class=hero-section-slider-txt-in>
                                                    <h1 class="hero-section-slider-txt-title d-flex flex-column align-items-center text-center text-white font-weight-normal">
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-medium" data-aos=fade-up data-aos-duration=800>
                                                            <span class=hero-section-slider-txt-title-block-txt>Welcome To</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-large mb-3" data-aos=fade-up data-aos-duration=800
                                                            data-aos-delay=100>
                                                            <span class=hero-section-slider-txt-title-block-txt>Damey Bank Group</span></div>
                                                        <div class="hero-section-slider-txt-title-block hero-section-slider-txt-title-block-small d-flex align-items-center"
                                                            data-aos=fade-up data-aos-duration=800 data-aos-delay=150>
                                                            <span class="hr-line bg-white mr-4"></span>
                                                            <!-- <span class="hero-section-slider-txt-title-block-txt flex-grow-1">Damey Bank Group Bank Somalia (Plc) Headquarters, Somalia</span></div> -->
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="swiper-pagination ml-n9 text-white"></div> -->
                    <!-- <div class="swiper-navigation mr-n9">
                        <div class="swiper-button-prev icon-holder-lg border rounded-circle swiper-navigation-el text-white">
                            <div class=swiper-navigation-el-content>
                                <div class=svg-scaler>
                                    <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 76.75 158.818">
<g><path
fill=currentColor d="M0.298,83.392c0-1,0.5-3,1.5-4.5c16.5-20,51.5-61.5,66.5-78.5c0.5-0.5,1,0,1.5,0.5c2,2.5,3.5,6,2.5,7.5
c-12,18.5-39,57-48.5,73c13,18,40,54.5,52.5,69.5c1,1,0,5-1.5,7c-1,1-1.5,1-2.5,0.5c-13.5-13.5-55-55-70.5-71c-1-1-1.5-2-1.5-3.5
V83.392z"/>
</g>
</svg></div>
                            </div>
                        </div>
                        <div class="swiper-button-next icon-holder-lg border rounded-circle swiper-navigation-el text-white">
                            <div class=swiper-navigation-el-content>
                                <div class=svg-scaler>
                                    <svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 76.75 158.818">
<g><path
fill=currentColor d="M76.7,75.513c0,1-0.5,3-1.5,4.5c-16.5,20-51.5,61.5-66.5,78.5c-0.5,0.5-1,0-1.5-0.5c-2-2.5-3.5-6-2.5-7.5
c12-18.5,39-57,48.5-73c-13-18-40-54.5-52.5-69.5c-1-1,0-5,1.5-7c1-1,1.5-1,2.5-0.5c13.5,13.5,55,55,70.5,71c1,1,1.5,2,1.5,3.5
V75.513z"/>
</g>
</svg></div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="feature-1-section z-index-2">
                    <div class="container position-relative">
                        <div class=row>
                            <div class=col>
                                <div class=feature-1-container>
                                <header class="feature-1-header text-center">
                                <h4 class="feature-1-header-title text-white font-weight-normal">Join DameyBank today! Register your account for easy and secure banking.
                                    <br>
                                <div class="register-button">
                                  <a href="client/pages_client_signup.php" class="btn btn-primary rounded-pill">Register</a>
                                </div>
                                </h4>
                                </header>
                                <style>
                                    .register-button {
    margin-top: 20px; /* Adjust the margin as needed */
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: red;
}

                                    </style>
                                    <div class=feature-1-body>
                                        <div class=feature-1-body-intro>
                                            <div class="feature-1-body-intro-extra-skew z-index-1 bg-gradient-blue-green-1"></div>
                                            <div class="feature-1-body-intro-in position-relative z-index-2">
                                                <div class="feature-1-body-intro-icon-cont border border-white rounded-circle">
                                                    <div class="feature-1-body-intro-icon bg-gradient-blue-green-2 rounded-circle">
                                                        <figure class=feature-1-body-intro-icon-in>
                                                            <img src=img/africa-map-icon.png alt></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="feature-1-body-content position-relative">
                                            <div class="feature-1-body-content-skew-cont-first bg-white z-index-1"></div>
                                            <div class="feature-1-body-content-skew-cont-last bg-white z-index-2"></div>
                                            <ul class="list-inline list-inline-separator position-relative z-index-3 js-hover-opaciate">
                                                <li class=list-inline-item>
                                                    <a class="media align-items-center" href="#">
                                                        <div class="feature-1-body-content-img-cont mr-3 rounded-circle overflow-hidden">
                                                            <img src="img/ke.png" alt class=feature-1-body-content-img></div>
                                                        <div class=media-body>
                                                            <h3 class="feature-1-body-content-title h4 text-dark">Kenya</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=list-inline-item>
                                                    <a class="media align-items-center" href="#">
                                                    <div class="feature-1-body-content-img-cont mr-3 rounded-circle overflow-hidden">
                                                        <img src="img/tz.png" alt class=feature-1-body-content-img></div>
                                                    <div class=media-body>
                                                        <h3 class="feature-1-body-content-title h4 text-dark">Tanzania</h3>
                                                    </div>
                                                    </a>
                                                </li>
                                                <li class=list-inline-item>
                                                    <a class="media align-items-center" href="#">
                                                        <div class="feature-1-body-content-img-cont mr-3 rounded-circle overflow-hidden">
                                                            <img src="img/som.png" alt class=feature-1-body-content-img></div>
                                                        <div class=media-body>
                                                            <h3 class="feature-1-body-content-title h4 text-dark">Somalia</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=list-inline-item>
                                                    <a class="media align-items-center" href="#">
                                                        <div class="feature-1-body-content-img-cont mr-3 rounded-circle overflow-hidden">
                                                            <img src="img/eth.png" alt class=feature-1-body-content-img></div>
                                                        <div class=media-body>
                                                            <h3 class="feature-1-body-content-title h4 text-dark">Ethiopia</h3>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=list-inline-item>
                                                    <a class="media align-items-center" href="#">
                                                    <div class="feature-1-body-content-img-cont mr-3 rounded-circle overflow-hidden">
                                                        <img src=img/ug.png alt class=feature-1-body-content-img></div>
                                                    <div class=media-body>
                                                        <h3 class="feature-1-body-content-title h4 text-dark">Uganda</h3>
                                                    </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="next-section side-position-right mr-n8">
                    <div class="next-section-el rotate-text d-flex align-items-center cursor-pointer">
                        <span class="next-section-el-text text-white text-uppercase letter-spacing-2 font-size-xs mb-3 ">Scroll</span>
                        <div class="next-section-el-icon icon-holder-sm bg-secondary text-white rounded-circle"><i class="bi bi-arrow-down"></i></div>
                    </div>
                </div>
            </section>
                <section class="feature-5-section page-section bg-gray-2 pb-12">
                <div class=container>
                    <div class=row>
                        <div class=col>
                            <div class="feature-5-container position-relative">
                                <div class=feature-5-header>
                                    <h2 class="feature-5-header-title text-dark mb-4">
                                        <span class="feature-5-header-title-block feature-5-header-title-small font-weight-normal d-block text-uppercase letter-spacing-2 font-size-xs mb-3">FROM A GLANCE</span>
                                        <span class="feature-5-header-title-block feature-5-header-title-medium font-size-xxxlg font-weight-bold d-block">DameyBank Group </span>
                                        <span class="feature-5-header-title-block feature-5-header-title-medium font-size-xxxlg font-weight-light d-block">in Numbers.</span></h2>
                                </div>
                                <br>
                                <br>
                                <br>
                                <div class=feature-5-body>
                                    <div class=feature-5-body-col></div>
                                    <div class=feature-5-body-col>
                                        <br>
                                        <br>
                                        <br>
                                        <div class="card card-type-4 bg-gradient-blue-green-1 text-white">
                                            <div class=card-body>
                                                <span class="card-icon card-type-4-icon bg-white"><figure
class=svg-scaler>
<img
src="img/Customers.svg"></figure>
</span>
                                                <h3 class="card-type-4-title font-weight-light text-gradient-white">Customers</h3>
                                                <p class="card-type-4-desc font-weight-light text-white">+150K</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=feature-5-body-col>
                                        <br>
                                        <br>
                                        <br>
                                        <div class="card card-type-4 bg-white text-white">
                                            <div class=card-body>
                                                <span class="card-icon card-type-4-icon bg-gradient-blue-green-1"><figure
class=svg-scaler>
<img
src="img/Asset-Base.svg"></figure>
</span>
                                                <h3 class="card-type-4-title font-weight-light text-gradient-blue-green-1">Asset Base</h3>
                                                <p class="card-type-4-desc font-weight-light text-gray-3">149M</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=feature-5-body-col>
                                        <div class="card card-type-4 bg-primary text-white">
                                            <div class=card-body>
                                                <span class="card-icon card-type-4-icon bg-white"><figure
class=svg-scaler>
<img
src="img/Loans-Advances.svg"></figure>
</span>
                                                <h3 class="card-type-4-title font-weight-light text-gradient-white">Loans &amp; Advances</h3>
                                                <p class="card-type-4-desc font-weight-light text-white">632M</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=feature-5-body-col>
                                        <div class="card card-type-4 bg-white text-white">
                                            <div class=card-body>
                                                <span class="card-icon card-type-4-icon bg-gradient-blue-green-1"><figure
class=svg-scaler>
<img
src="img/Deposits.svg"></figure>
</span>
                                                <h3 class="card-type-4-title font-weight-light text-gradient-blue-green-1">Deposits</h3>
                                                <p class="card-type-4-desc font-weight-light text-gray-3">683M</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=feature-5-body-col>
                                        <div class="card card-type-4 bg-gradient-blue-green-1 text-white">
                                            <div class=card-body>
                                                <span class="card-icon card-type-4-icon bg-white"><figure
class=svg-scaler>
<img
src="img/Countrywide-Branches.svg"></figure>
</span>
                                                <h3 class="card-type-4-title font-weight-light text-gradient-white">Branches</h3>
                                                <p class="card-type-4-desc font-weight-light text-white">20</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <article id=post-2 class="post-2 page type-page status-publish has-post-thumbnail hentry"></article>
            <footer class="page-footer bg-primary group-footer">
                <div class=container>
                    <div class=row>
                        <div class=col>
                            <div class=page-footer-container>
                                <div class="page-footer-top d-flex align-items-center py-4">
                                    <p class="mb-0 text-white font-size-xs footer-desc">
                                        24-hour Call Centre: <a class=text-white href="#">+254 727 01 4004</a>, or email dameybank@gmail.com<a class=text-white href="#"></span></a></p>
                                      
                                                     </div>
                                                     <a href="#" class="text-white mr-2"><img src="img/facebook.png" alt="Facebook"></a>
                                                     <a href="#" class="text-white mr-2"><img src="img/twitter.png" alt="Twitter"></a>
                                                     <a href="#" class="text-white"><img src="img/instagram.png" alt="Instagram"></a>
                                                     
                                
                                <div class="page-footer-bottom d-flex py-4">
                                    <p class="mb-0 copyright-text font-size-xs text-white">Copyright &copy; 2024 Damey Bank. All rights reserved.</p>
                                    <div class="drop-down-cont ml-auto">
                                        <div class=dropdown>
                                            <div id=countries-dropdown data-toggle=dropdown aria-haspopup=true aria-expanded=false class="dropdown-select-cont cursor-pointer">
                                                <div class=dropdown-select></div>
                                                <div class="dropdown-select-icon text-white ml-2"><i class="bi bi-chevron-down font-size-sm"></i></div>
                                            </div>
                                            <ul class=dropdown-menu aria-labelledby=countries-dropdown>
                                                <li class=" selected-dropdown-item dropdown-item">
                                                    <a href="#">
                                                        <div class="media dropdown-media ">
                                                            <div class=dropdown-media-img><img src="img/ke.png" alt></div>
                                                            <div class="dropdown-media-text text-white">Kenya</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=" selected-dropdown-item dropdown-item">
                                                    <a href="#">
                                                        <div class="media dropdown-media ">
                                                            <div class=dropdown-media-img><img src="img/tz.png" alt></div>
                                                            <div class="dropdown-media-text text-white">Tanzania</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=" selected-dropdown-item dropdown-item">
                                                    <a href="#">
                                                        <div class="media dropdown-media ">
                                                            <div class=dropdown-media-img><img src="img/som.png" alt></div>
                                                            <div class="dropdown-media-text text-white">Somalia</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class=" selected-dropdown-item dropdown-item">
                                                    <a href="#">
                                                    <div class="media dropdown-media ">
                                                        <div class=dropdown-media-img><img src=img/ug.png alt></div>
                                                        <div class="dropdown-media-text text-white">Uganda</div>
                                                    </div>
                                                    </a>
                                                </li>
                                                <li class=" selected-dropdown-item dropdown-item">
                                                    <a href="#">
                                                    <div class="media dropdown-media ">
                                                        <div class=dropdown-media-img><img src="img/eth.png" alt></div>
                                                        <div class="dropdown-media-text text-white">Ethiopia</div>
                                                    </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </main>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"86fbd8928e334eb4","version":"2024.3.0","token":"7202630b041246dfa0c73a2cf4715533"}'
        crossorigin="anonymous"></script>
       
  
  <script>
  var swiper = new Swiper('.js-slider', {
    loop: true,
    autoplay: {
      delay: 5000, // Delay between slides in milliseconds (5 seconds in this case)
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
</script>



</script>
</body>

</html>


<script src='img/themes/imbank_landing/assets/js/library.dll.js?ver=1.0.0' id=imbank-library-js></script>
<script src='img/themes/imbank_landing/assets/js/main.bundle.js?ver=1.0.0' id=imbank-main-js></script>
</body>

</html>
<?php
        } ?>