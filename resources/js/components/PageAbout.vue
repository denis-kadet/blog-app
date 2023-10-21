<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <a href="">
                                <strong>Ocean</strong>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Customs House Brokers Import
                                Compliance/<br>Clearance</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Multi-Modal/ Door-to-Door Foreign to Foreign</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <a href="">
                                <strong>Air</strong>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Freight Forwarder/ Export Compliance</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Projects/ Specialized<br>Cargo</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <a href="">
                                <strong>Surface</strong>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Other Regulatory and Compliance Services</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-4 col-sm-6">
                    <figure class="ocean">
                        <figcaption>
                            <strong>Warehousing and Distribution</strong>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageAbout",
    created() {
        console.log('Component About mounted.')
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700,300italic);

body {
    font-family: 'Open Sans Condensed', sans-serif;
}


figure {
    position: relative;
    width: 100%;
    min-height: 160px;
    display: block;
    float: left;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: inset 0px 2px 3px rgba(0,0,0,.2);
    -webkit-transition: all .15s ease-in-out;
}

.ocean {
    background-color: #000;
    background-image: url("http://frontendfreecode.com/codes/files/ship.jpg");
    background-size: cover;
    background-position: center center;
}

figcaption {
    display: block;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    color: #FFF;
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(0,0,0,.7);
    width: 55%;
    height: 100%;
    margin: 0 0 0 -20px;
    ;
    padding: 20px;
    padding-left: 40px;
    -webkit-transform: skew(-10deg);
    -moz-transform: skew(-10deg);
    -o-transform: skew(-10deg);
    -webkit-transition: all .15s ease-in-out;
}

    figcaption a, figcaption a:hover {
        color: #FFF;
        text-decoration: none;
    }

    figcaption strong {
        display: block;
        word-wrap: normal;
        -webkit-transform: skew(10deg);
        -moz-transform: skew(10deg);
        -o-transform: skew(10deg);
    }

        figcaption strong:before {
            content: " ";
            border-top: solid 3px rgba(211,29,26,1);
            width: 140%;
            display: block;
            clear: both;
            margin-bottom: 20px;
            -webkit-transition: all .15s ease-in-out;
        }

/* HOVERS */
figure:hover figcaption {
    background-color: rgba(211,29,26,.9);
    -webkit-transition: all .15s ease-in-out;
}

    figure:hover figcaption strong:before {
        width: 200%;
        border-color: #FFF;
        -webkit-transition: all .15s ease-in-out;
    }
</style>
