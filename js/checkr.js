function checkr(minimumAmount, currencySymbol){

            // All console logs are commented out - find and replace '// console.log'

            console.log('checkr check');

            // We need to check if jQuery has loaded, or this will break everything.
            // Test using 'window.jQuery' rather than 'window.$', as window.$ could be
            // other JavaScript libraries such as mootools, Prototype etc.
            if ( window.jQuery ) {

                        var min = minimumAmount, // this min value is malleable
                                    value,
                                    minDonationText = 'Minimum donation is ' + currencySymbol + min + '.';


                        function prompt(addOrRemove, target, text) {
                                    // console.log('prompt check fired');

                                    if ( addOrRemove == 'add' ) {
                                                jQuery('#' + target).parent().find('.prompt-tip').remove();
                                                // console.log(jQuery('#' + target + 'submit'));
                                                jQuery('#' + target ).parents('.donation-form')find('button').addClass('disabled');

                                                // console.log('prompt fired - add');

                                                // The prompt needs to be unique for each form, otherwise the first
                                                // form could turn off the prompt for the second form. The target
                                                // and text is passed over when the prompt function is used.
                                                var promptTip = '<p id="' + target + 'prompt-tip" class="prompt-tip">' + text + '</p>',
                                                            targetID = jQuery('#' + target);

                                                // Add the prompt into the li that surrounds the other-amount inputs
                                                promptTip.appendTo(targetID);
                                    }

                                    else if ( addOrRemove == 'remove' ) {
                                                // We also need to remove the prompts when needed (for example, when
                                                // other inputs are selected.)
                                                //var target = target.match(radioOrNumber)[0];
                                                jQuery('#' + target).parent().find('.prompt-tip').remove();

                                                // console.log(jQuery('#' + target + 'submit'));
                                                jQuery('#' + target).parents('.donation-form')find('button').removeClass('disabled');
                                    }

                                    else {
                                                // Message in case the other `if` don't catch everything.
                                                // console.log('prompt() fail');
                                    }
                        }


                        function checkAmount(trigger) {
                                    // The target is always to check whether the input[number] has a value
                                    // above the minimum. So the only thing that changes is the first two
                                    // sections of the #id, to which we can add on 'other-amount-number' to
                                    // target the input[number].
                                    var target = trigger.id.match(radioOrNumber)[0],
                                    targetID = jQuery('#' + target );

                                                // console.log(target);
                                                // console.log(targetID);

                                    /* This needs to be rewritten to take into account that this is going to
                                                be used on donation pages - which are CC, but don't need the multiplier.*/

                                    if ( trigger.id.match('^(.*?)(adoptionCC)(.*?)') ) {
                                                min = minimumAmount * 12; // One year's worth of DD
                                                minDonationText = 'Minimum donation is ' + currencySymbol + min + '.';
                                                // console.log('multiplied ' + min);
                                    }

                                    else {
                                                min = minimumAmount; // reset
                                                minDonationText = 'Minimum donation is ' + currencySymbol + min + '.';
                                                // console.log('non-multipled - ' + min);
                                    }

                                                // What's the value that's been entered?
                                                value = targetID.val();

                                                // We need to do nothing when the input[number] is empty.
                                                if ( typeof value == 'undefined' || typeof value == null || value == '' ) {
                                                            // Do nothing. Stare at ceiling. Avoid eye contact. Awkward.

                                                            // console.log('awkward');

                                                            if ( trigger.type == 'submit' ) {
                                                                        // console.log('submit fired');

                                                                        // Remind people that they need to add a number in, but only
                                                                        // when they press submit.
                                                                        prompt('add', target, minDonationText);
                                                            }

                                                }

                                                // Removes the prompt if the amount in the input[number] is above
                                                // the minimum.
                                                else if ( value >= min ) {

                                                            prompt('remove', target);

                                                            // Returns true to let the submit submit.
                                                            return true;
                                                }

                                                // Adds the prompt if the amount in the input[number] is below
                                                // the minimum.
                                                else if ( value < min ) {
                                                            prompt('add', target, minDonationText);
                                                            return false;
                                                }

                                                // In case the `if` don't catch everthing.
                                                else {
                                                            // console.log('check amount fail');
                                                }
                        }


                        jQuery(document).ready(function(){
                                    // Run through and get all of the inputs that will trigger the minimum
                                    // check - should only be the amount-other radio and number inputs with
                                    // this class.
                                    var triggers = jQuery('button, input'); // need to add on <button>

                                    // console.log('triggers = ');
                                    // console.log(triggers);

                                    // Check for the existance of any inputs - if not, then
                                    // stop the script
                            // ---------------------------------------------------------------------
                            if ( triggers.length == 0 || triggers == 0 || typeof triggers == undefined || typeof triggers == null ) {
                                // console.log('false - kill process')
                                return false;
                            }

                                    // Loop through all of the triggers
                                    for (var i = triggers.length - 1; i >= 0; i--) {

                                                // Get the input[type] of each of the triggers. Find the ID
                                                // later, as the type[hidden] don't have IDs.
                                                var       triggerType = triggers[i].type;

                                                console.log('triggerType = ' + triggerType);

                                                // If it's a radio input, then we'll need to treat it slightly
                                                // differently.
                                                if ( triggerType == 'radio' ) {

                                                            // console.log('trigger type is radio');

                                                            var trigger = jQuery('#' + triggers[i].id);

                                                            // Trigger on click.
                                                            trigger.click(function(){
                                                                        checkAmount(this);
                                                                        prompt('remove', this.id);
                                                            });
                                                }

                                                // A number input needs this to be triggered when the input loses
                                                // focus - when it blurs.
                                                else if ( triggerType == 'number' || triggerType == 'text' ) {

                                                            // console.log('trigger type is text / number');

                                                            var trigger = jQuery('#' + triggers[i].id);

                                                            // Trigger the amount check on blur
                                                            trigger.blur(function(){
                                                                        // console.log('input[number] blur');
                                                                        checkAmount(this);
                                                            });

                                                            trigger.focus(function(){
                                                                  jQuery(this).parents('.manual').find('input[type=radio]').prop('checked', true);  
                                                                  //console.log('input[number] focus');
                                                                  prompt('remove', this.id);
                                                            })
                                                }

                                                // The input[submit] needs to trigger the amountCheck - but only
                                                // when the input[radio] tied to input[number] is selected.
                                                else if ( triggerType == 'submit' ) {

                                                            // console.log('trigger type is submit');

                                                            var trigger = jQuery('#' + triggers[i].id);

                                                            // Attach a click to the submit input
                                                            trigger.click(function(){

                                                                        // Get whether the radio input for the other amount is
                                                                        // checked or not
                                                                        var isOtherAmountSelected = jQuery( '#' + this.id.match(radioOrNumber)[0] + 'other-amount-radio' ).prop('checked');

                                                                        // Return true if both the radio button and the amount is
                                                                        // above the minimum.
                                                                        if ( isOtherAmountSelected == true && checkAmount(this) == true ) {
                                                                                    // console.log('isOtherAmountSelected true, checkAmount true');
                                                                                    return true;
                                                                        }

                                                                        // Return true if another radio button is selected
                                                                        else if ( isOtherAmountSelected == false ) {
                                                                                    // console.log('isOtherAmountSelected is false, returns true');
                                                                                    return true;
                                                                        }

                                                                        // Return false is neither another radio button is selected,
                                                                        // or the other amount is above the minimum.
                                                                        else {
                                                                                    // console.log('submit returns false');

                                                                                    //console.log(jQuery(this));

                                                                                    return false;
                                                                        }
                                                            });
                                                }

                                                // Catch any input[hidden]
                                                else if ( triggerType == 'hidden' ) {
                                                            // Do nothing.
                                                            // console.log('type is hidden');
                                                }

                                                // Catch anything else.
                                                else {
                                                            // Do nothing.
                                                            // console.log('final else is triggered');
                                                }

                                    };

                                    return true;

                        });
            }
}
checkr(10,'£');