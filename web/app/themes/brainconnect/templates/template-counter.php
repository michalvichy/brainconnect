<?php
    $counter_fields = CFS()->get();
    $headline = $counter_fields['bc_counter_headline'];
    $text = $counter_fields['bc_counter_text'];
?>

<div class="grid grid--center">
    <div class="grid__item eleven-twelfths tab--two-thirds desk--one-half">
        <div class="logo-container">
            <div class="img-box">
                <img src="<?php echo get_template_directory_uri().'/dist/images/logo.png'; ?>" alt="">
            </div>
        </div>
    </div>
</div>

<div class="grid grid--full">
    <div class="grid__item tab--one-half">
        <div class="grid grid--center">
            <div class="grid__item desk--four-fifths">
                <div class="infobox js-infobox">
                    <div class="infobox__inner">
                        <h1 class="infobox__headline"><?php echo $headline; ?></h1>
                        <?php if($text != ''): ?>
                            <p class="infobox__body"><?php echo $text; ?></p>
                        <?php endif; ?>
                        <div class="infobox__counter js-counter">
                            <div class="grid grid--center">
                                <div class="grid__item one-quarter">
                                    <div class="timer">
                                        <span id="days" class="timer-value"></span>
                                        <div>days</div>
                                    </div>
                                </div><!--
                                --><div class="grid__item one-quarter">
                                    <div class="timer">
                                        <span id="hours" class="timer-value"></span>
                                        <div>hours</div>
                                    </div>
                                </div><!--
                                --><div class="grid__item one-quarter">
                                    <div class="timer">
                                        <span id="minutes" class="timer-value"></span>
                                        <div>minutes</div>
                                    </div>
                                </div><!--
                                --><div class="grid__item one-quarter">
                                    <div class="timer">
                                        <span id="seconds" class="timer-value timer-value--last"></span>
                                        <div>seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--
    --><div class="grid__item tab--one-half">
        <div class="grid grid--center">
            <div class="grid__item desk--three-fifths">
                <div class="img-box cover-box js-coverbox">
                    <img src="<?php echo get_template_directory_uri().'/dist/images/okladka.jpg'; ?>" alt="">
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="counter__footer">
    <div class="grid grid--center">
        <p>Znajdziesz nas na:</p>
        <div class="grid__item one-whole tab--three-quarters desk--one-third">
            <div class="grid grid--center">
                <?php
                    $socials = $counter_fields['bc_socials'];
                    foreach ($socials as $social) :
                        $icon = $social['bc_social_icon'];
                        $link = $social['bc_social_link'];
                ?><!--
                --><div class="grid__item one-tenth">
                    <a href="<?php echo $link; ?>" class="social__link">
                        <img src="<?php echo $icon; ?>" alt="">
                    </a>
                </div><!--
                --><?php endforeach; ?>
            </div>
        </div>
    </div>
</footer>
