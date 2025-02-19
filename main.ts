namespace SpriteKind {
    export const hitbox = SpriteKind.create()
}
// Path:
// stage
// backstage or ballpit
// stage
// 4 stages before escaping
// 2 stages before attack
// fails movement if being watched
// only attacks 
// as fast as Chica but bonnie's mulltpliers
// 
function Foxymove () {
    if (night) {
        if (cam_on) {
            if (foxyposition == 6 && foxyattack) {
                timer.after(500, function () {
                    if (foxyattack) {
                        FoxyJumscare()
                    }
                })
            } else if (foxyposition == 6) {
                if (sprites.readDataString(Foxy_Von_Foxtrot_III, "Route") == "Return") {
                    tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(35, 0))
                    foxyposition = 1
                } else if (sprites.readDataString(Foxy_Von_Foxtrot_III, "Route") == "Attack") {
                    if (!(Escaping)) {
                        if (!(Attacking)) {
                            if (foxydirection == 2) {
                                tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(49, 0))
                                foxyattack = true
                                Attacking = true
                            } else if (foxydirection == 1) {
                                if (cam04alt) {
                                    tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(49, 0))
                                    foxyattack = true
                                    Attacking = true
                                }
                                attackdirection = foxydirection
                                foxydirection = 0
                            }
                        }
                    }
                }
                Foxy_Von_Foxtrot_III.setImage(assets.image`Foxy Von Foxtrot`)
            } else if (foxyposition == 5) {
                if (attackdirection == 2) {
                    tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(27, 7))
                    foxyposition = 6
                    Foxy_Von_Foxtrot_III.setImage(assets.image`Foxy Von Foxtrot0`)
                } else if (attackdirection == 1) {
                    tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(32, 8))
                    foxyposition = 6
                    Foxy_Von_Foxtrot_III.setImage(assets.image`Foxy Von Foxtrot0`)
                }
                timer.background(function () {
                    for (let index = 0; index < 4; index++) {
                        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                        pause(1000)
                    }
                })
            } else if (foxyposition == 3) {
                if (!(cam02alt)) {
                    if (randint(1, 20) <= Foxyaggression) {
                        if (!(cam02alt)) {
                            splitScreen.cameraShake(splitScreen.Camera.Camera2, 5, 500)
                        }
                        if (Math.percentChance(50)) {
                            attackdirection = 2
                            foxydirection = attackdirection
                        } else {
                            attackdirection = 1
                            foxydirection = attackdirection
                        }
                        foxyposition = 5
                    }
                }
            } else if (foxyposition == 2) {
                if (!(cam02alt)) {
                    if (randint(1, 20) <= Foxyaggression) {
                        if (!(cam02alt)) {
                            splitScreen.cameraShake(splitScreen.Camera.Camera2, 4, 500)
                        }
                        foxyposition = 3
                    }
                }
            } else if (foxyposition == 1) {
                if (!(cam02alt)) {
                    if (randint(1, 20) <= Foxyaggression) {
                        if (!(cam02alt)) {
                            splitScreen.cameraShake(splitScreen.Camera.Camera2, 3, 500)
                        }
                        foxyposition = 2
                    }
                }
            } else {
                if (!(cam02alt)) {
                    if (randint(1, 20) <= Foxyaggression) {
                        if (!(cam02alt)) {
                            splitScreen.cameraShake(splitScreen.Camera.Camera2, 2, 500)
                        }
                        foxyposition = 1
                    }
                }
            }
        }
    }
}
// Path:
// stage or ballpit or backstage or entry or arcade or office
// Look at him til he goes away
// disappears after each movement
// can't escspe
function Sparkymove () {
    if (night) {
        if (Sparkyposition == 6 && Sparkyattack) {
            if (!(cam_on)) {
                timer.after(randint(2000, 5000), function () {
                    Jumpscare.setImage(assets.image`jumpscare`)
                    Sparkyattack = false
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    Sparkyposition = 0
                    music.stopAllSounds()
                    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
                })
            }
        } else if (Sparkyposition == 6) {
            if (!(Escaping)) {
                if (randint(1, 2) == 2) {
                    Jumpscare.setImage(assets.image`sparky-img0`)
                } else {
                    Jumpscare.setImage(assets.image`sparky-img2`)
                }
                Sparkyattack = true
                story.startCutscene(function () {
                    story.printDialog("I'm in here with you.", 80, 30, 50, 150, 1, 15, story.TextSpeed.VerySlow)
                })
                music.play(music.createSong(assets.song`loop`), music.PlaybackMode.LoopingInBackground)
            }
        } else if (Sparkyposition == 5) {
            if (randint(1, 20) <= Sparkyaggression) {
                if (!(cam04alt)) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(49, 0))
                    Sparkyposition = 0
                    sparkylookatmecams = false
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (Sparkyposition == 3) {
            if (randint(1, 20) <= Sparkyaggression) {
                if (cam04alt) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(49, 0))
                    Sparkyposition = 0
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = false
                }
            }
        } else if (Sparkyposition == 2) {
            if (randint(1, 20) <= Sparkyaggression) {
                if (!(cam02alt)) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(49, 0))
                    Sparkyposition = 0
                    sparkylookatmecams = false
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else if (Sparkyposition == 1) {
            if (randint(1, 20) <= Sparkyaggression) {
                if (cam_on) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(49, 0))
                    Sparkyposition = 0
                    sparkylookatmecams = false
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        } else {
            if (randint(1, 20) <= Sparkyaggression) {
                if (randint(1, 6) == 1) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(27, 2))
                    Sparkyposition = 1
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = true
                } else if (randint(1, 6) == 2) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(27, 9))
                    Sparkyposition = 1
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = true
                } else if (randint(1, 6) == 3) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(36, 0))
                    Sparkyposition = 2
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = true
                } else if (randint(1, 6) == 4) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(33, 8))
                    Sparkyposition = 3
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = true
                } else if (randint(1, 6) == 5) {
                    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(43, 0))
                    Sparkyposition = 5
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 76, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sparkylookatmecams = true
                } else {
                    Sparkyposition = 6
                    music.play(music.createSoundEffect(WaveShape.Noise, 2625, 1, 0, 65, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (cam_on) {
        if (Escaping) {
            if (!(cam02alt)) {
                Lockbar1.setFlag(SpriteFlag.Invisible, false)
            } else {
                Lockbar2.setFlag(SpriteFlag.Invisible, false)
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    if (cam_on) {
        Lockbar1.setFlag(SpriteFlag.Invisible, true)
        Lockbar2.setFlag(SpriteFlag.Invisible, true)
        Lockbar1.value = 0
        Lockbar2.value = 0
    }
})
function StartNight (_: number) {
    myMenu3 = miniMenu.createMenu(
    miniMenu.createMenuItem("Answer"),
    miniMenu.createMenuItem("Skip")
    )
    myMenu3.setTitle("*Phone Rings*")
    myMenu3.setFrame(assets.image`frame`)
    myMenu3.setDimensions(78, 44)
    myMenu3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    myMenu3.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
    myMenu3.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
    myMenu3.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 15)
    myMenu3.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu3.close()
        if (selectedIndex == 0) {
            timer.background(function () {
                of_the_Phone(_)
            })
        }
        if (_ == 1) {
            game.showLongText("Use Z on the monitor to access cameras, X on the doors to close them, and arrows to move your flashlight.", DialogLayout.Center)
            Bonnieaggression = 0
            Chicaaggression = 0
            Foxyaggression = 0
            Freddyaggression = 0
            info.startCountdown(120)
            timer.after(40000, function () {
                Bonnieaggression += 1
                timer.after(40000, function () {
                    Bonnieaggression += 1
                })
            })
        } else if (_ == 2) {
            Bonnieaggression = 4
            Chicaaggression = 6
            Foxyaggression = 0
            Freddyaggression = 0
            info.startCountdown(150)
            timer.after(50000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                timer.after(50000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                })
            })
        } else if (_ == 3) {
            Bonnieaggression = 6
            Chicaaggression = 8
            Foxyaggression = 4
            Freddyaggression = 0
            info.startCountdown(180)
            timer.after(60000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                timer.after(60000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else if (_ == 4) {
            Bonnieaggression = 11
            Chicaaggression = 12
            Foxyaggression = 8
            Freddyaggression = 1
            info.startCountdown(210)
            timer.after(70000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                Freddyaggression = 3
                timer.after(70000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else if (_ == 5) {
            Bonnieaggression = 14
            Chicaaggression = 16
            Foxyaggression = 12
            Freddyaggression = 2
            info.startCountdown(240)
            timer.after(80000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                Freddyaggression = 6
                timer.after(80000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else {
            The_Party_Room()
        }
        night = true
        sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "escape")
        sprites.setDataString(Chica_El_Pollo, "Route", "Attack")
        if (Math.percentChance(50)) {
            sprites.setDataString(Fred_E_Fazbear, "Route", "Attack")
        } else {
            sprites.setDataString(Fred_E_Fazbear, "Route", "escape")
        }
        sprites.setDataString(Foxy_Von_Foxtrot_III, "Route", "Attack")
    })
}
function Gameoversequence () {
    night = false
    FlashLight.setFlag(SpriteFlag.Invisible, true)
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`pitch`)
    lantern.startLanternEffect(Office)
    lantern.setLightBandWidth(50)
    animation.runImageAnimation(
    Office,
    assets.animation`door go brrrrr`,
    200,
    false
    )
    story.startCutscene(function () {
        story.printDialog("...", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
        story.printDialog("It's so dark.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
        story.printDialog("I need to know what happened..", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
        color.FadeToBlack.startScreenEffect(1000)
        Office.setImage(assets.image`pitch`)
        color.startFadeFromCurrent(color.originalPalette, 1000)
        timer.debounce("action", 1000, function () {
            story.printDialog("...", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("Ok, I think I got my flashlight working.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("Let's see why this room was closed.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("..and if it has anything to do with you, Cassidy..", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            Office.setImage(assets.image`sparky-`)
            timer.debounce("action", 1000, function () {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
                scene.cameraShake(4, 500)
                story.printDialog("Oh shoot! No, no no.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Fast)
                story.printDialog("STAY AWAY FROM ME!", 80, 30, 50, 150, 1, 15, story.TextSpeed.Fast)
                story.printDialog("Vanny...I missed you..", 80, 30, 50, 150, 4, 15, story.TextSpeed.Slow)
                story.printDialog("W-What?", 80, 30, 50, 150, 1, 15, story.TextSpeed.Fast)
                story.printDialog("They miss you Vanessa, don't you miss them?", 80, 30, 50, 150, 11, 15, story.TextSpeed.Normal)
                story.printDialog("WHO ELSE IS HERE!?", 80, 30, 50, 150, 1, 15, story.TextSpeed.Fast)
                Office.setImage(assets.image`spring-`)
                music.play(music.stringPlayable("F D E G F D E C ", 40), music.PlaybackMode.LoopingInBackground)
                timer.debounce("action", 1000, function () {
                    story.printDialog("Hi-ya there Vanessa, I heard so much about you.", 80, 30, 50, 150, 11, 15, story.TextSpeed.Normal)
                    story.printDialog("My friends here told me aaaalllll about you", 80, 30, 50, 150, 11, 15, story.TextSpeed.Normal)
                    story.printDialog("Sparky here misses you dearly,", 80, 30, 50, 150, 11, 15, story.TextSpeed.Normal)
                    story.printDialog("So does Cassidy", 80, 30, 50, 150, 11, 15, story.TextSpeed.VerySlow)
                    story.printDialog("Cass? Where are they!", 80, 30, 50, 150, 1, 15, story.TextSpeed.Fast)
                    Office.setImage(assets.image`pitch`)
                    timer.debounce("action", 500, function () {
                        story.printDialog("Well there right over here", 80, 30, 50, 150, 11, 15, story.TextSpeed.Slow)
                        Office.setImage(assets.image`Cassidy`)
                        timer.debounce("action", 500, function () {
                            story.printDialog("Cass? Is that you?", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
                            story.printDialog("V-Vanny...I mi-missed you..", 80, 30, 50, 150, 4, 15, story.TextSpeed.VerySlow)
                            music.stopAllSounds()
                            story.printDialog("Won't you join us?", 80, 30, 50, 150, 4, 15, story.TextSpeed.Normal)
                            story.printDialog("what?..", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
                            animation.runImageAnimation(
                            Office,
                            assets.animation`myAnim0`,
                            300,
                            false
                            )
                            timer.debounce("action", 1000, function () {
                                story.printDialog("WE WANT A N-NEW FR-FRIEND!", 80, 30, 50, 150, 4, 15, story.TextSpeed.Slow)
                                animation.runImageAnimation(
                                Office,
                                assets.animation`Sparkidy`,
                                200,
                                false
                                )
                                music.play(music.createSoundEffect(
                                WaveShape.Noise,
                                1000,
                                1000,
                                70,
                                255,
                                6000,
                                SoundExpressionEffect.Vibrato,
                                InterpolationCurve.Linear
                                ), music.PlaybackMode.InBackground)
                                timer.debounce("action", 3000, function () {
                                    animation.runImageAnimation(
                                    Office,
                                    assets.animation`The end`,
                                    600,
                                    false
                                    )
                                    timer.debounce("action", 15000, function () {
                                        game.setGameOverPlayable(true, music.melodyPlayable(music.footstep), false)
                                        game.setGameOverMessage(true, "Welcome to the faz-family")
                                        game.gameOver(true)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (cam_on) {
        if (!(cam04alt)) {
            cam04alt = true
            tiles.placeOnTile(Cam04, tiles.getTileLocation(34, 8))
        } else {
            cam04alt = false
            tiles.placeOnTile(Cam04, tiles.getTileLocation(43, 1))
        }
    }
})
function BonnieJumscare () {
    if (cam_on) {
        lantern.startLanternEffect(FlashLight)
        splitScreen.setSplitScreenEnabled(false)
        FlashLight.setPosition(77, 58)
    }
    scene.cameraShake(4, 1000)
    night = false
    music.play(music.createSoundEffect(WaveShape.Noise, 2978, 2949, 147, 159, 1100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Jumpscare,
    assets.animation`boonie`,
    75,
    false
    )
    timer.after(1000, function () {
        if (minigame > 0) {
            game.setGameOverMessage(true, "Boo, you suck")
            game.setGameOverEffect(true, effects.none)
            game.gameOver(true)
        } else {
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        }
    })
}
function FreddyJumscare () {
    if (cam_on) {
        lantern.startLanternEffect(FlashLight)
        splitScreen.setSplitScreenEnabled(false)
        FlashLight.setPosition(77, 58)
    }
    scene.cameraShake(4, 1000)
    night = false
    music.play(music.createSoundEffect(WaveShape.Noise, 432, 344, 72, 73, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Jumpscare,
    assets.animation`ISEEYOUMOVEYOUDIENOW`,
    75,
    false
    )
    timer.after(1200, function () {
        if (minigame > 0) {
            game.setGameOverMessage(true, "Boo, you suck")
            game.setGameOverEffect(true, effects.none)
            game.gameOver(true)
        } else {
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        }
    })
}
function Start () {
    Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.ONE,
    Keybinds.CustomKey.UP,
    Keybinds.CustomKey.DOWN,
    Keybinds.CustomKey.LEFT,
    Keybinds.CustomKey.RIGHT,
    Keybinds.CustomKey.Z,
    Keybinds.CustomKey.X
    )
    Keybinds.setSimulatorKeymap(
    Keybinds.PlayerNumber.TWO,
    Keybinds.CustomKey.P,
    Keybinds.CustomKey.I,
    Keybinds.CustomKey.A,
    Keybinds.CustomKey.S,
    Keybinds.CustomKey.SHIFT,
    Keybinds.CustomKey.SPACE
    )
    tiles.setCurrentTilemap(tilemap`level2`)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    Office = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    Monitor = sprites.create(assets.image`myImage14`, SpriteKind.Player)
    Jumpscare = sprites.create(assets.image`jumpscare`, SpriteKind.Enemy)
    Door1 = sprites.create(assets.image`Box`, SpriteKind.hitbox)
    Door2 = sprites.create(assets.image`box`, SpriteKind.hitbox)
    FlashLight = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    Cam01 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    Cam02 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    Cam03 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    Cam04 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    Fred_E_Fazbear = sprites.create(assets.image`Fred E Fazbear`, SpriteKind.Enemy)
    Bonnie_Bunzo_rabbit = sprites.create(assets.image`Bonnie Bunzo the rabbit`, SpriteKind.Enemy)
    Chica_El_Pollo = sprites.create(assets.image`Chica El Pollo`, SpriteKind.Enemy)
    Foxy_Von_Foxtrot_III = sprites.create(assets.image`Foxy Von Foxtrot`, SpriteKind.Enemy)
    Sparky_Volt = sprites.create(assets.image`Sparky Volt`, SpriteKind.Enemy)
    statusbar = statusbars.create(20, 4, StatusBarKind.Magic)
    Powerbar = statusbars.create(50, 4, StatusBarKind.Health)
    Lockbar1 = statusbars.create(20, 4, StatusBarKind.Energy)
    Lockbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
    Powerbar.attachToSprite(Cam03, -38, -15)
    Lockbar1.attachToSprite(Cam01)
    Lockbar2.attachToSprite(Cam02)
    Lockbar1.setColor(9, 8)
    Lockbar2.setColor(9, 8)
    Powerbar.setColor(7, 2, 1)
    Lockbar1.setBarBorder(1, 11)
    Lockbar2.setBarBorder(1, 11)
    Powerbar.setBarBorder(1, 12)
    Lockbar1.max = 5
    Lockbar2.max = 5
    Powerbar.max = 100
    Lockbar1.value = 0
    Lockbar2.value = 0
    Powerbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.max = 5
    statusbar.value = 0
    statusbar.attachToSprite(FlashLight)
    statusbar.setColor(2, 15)
    statusbar.setBarBorder(1, 12)
    Door1.setPosition(97, 47)
    Door2.setPosition(130, 54)
    Lockbar1.setFlag(SpriteFlag.Invisible, true)
    Lockbar2.setFlag(SpriteFlag.Invisible, true)
    Door1.setFlag(SpriteFlag.Invisible, true)
    Door2.setFlag(SpriteFlag.Invisible, true)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    FlashLight.setStayInScreen(true)
    Monitor.setPosition(47, 91)
    controller.moveSprite(FlashLight, 150, 150)
    splitScreen.setSplitScreenEnabled(false)
    splitScreen.setBorderColor(12)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Cam01)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Cam02)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Cam03)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, Cam04)
    scene.cameraFollowSprite(Office)
    tiles.placeOnTile(Cam04, tiles.getTileLocation(43, 1))
    tiles.placeOnTile(Cam03, tiles.getTileLocation(27, 8))
    tiles.placeOnTile(Cam02, tiles.getTileLocation(35, 1))
    tiles.placeOnTile(Cam01, tiles.getTileLocation(27, 1))
    tiles.placeOnTile(Sparky_Volt, tiles.getTileLocation(27, 10))
    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(37, 1))
    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(37, 2))
    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(37, 3))
    tiles.placeOnTile(Foxy_Von_Foxtrot_III, tiles.getTileLocation(35, 0))
    lantern.startLanternEffect(FlashLight)
    office_sprites = [
    assets.image`myImage1`,
    assets.image`freddy01`,
    assets.image`bonnie01`,
    assets.image`chica01`,
    assets.image`myImage12`,
    assets.image`myImage11`,
    assets.image`myImage13`
    ]
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
    freddyposition = 0
    Bonnieposition = 0
    chicaposition = 0
    foxyposition = 0
}
function of_the_Phone (num: number) {
    if (num == 1) {
        story.startCutscene(function () {
            story.printDialog("Hello? Hello! Hey there! I'm your trainer for your first job here at Fred E.'s Pizzeria.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Now I know this job is sorta scary, being alone here at night and all, but it isn't all that bad.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("It's a simple task, watch the robots and make sure they don't get..Robonapped? That sounds right.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("If you go over to your monitor you can see the camera setup. Your cameras are: The stage, the ballpit, the entryway, and the backstage.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("You can use the A and S buttons to switch the stage to the kitchen and the ballpit to the arcade cameras.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("If you ever see some hooligans try to enter from the entry way then just press space and lock the door.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Like I said, easy. You'll do fine, Oh! And Welcome to the Faz-family Vanessa. ", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
        })
    } else if (num == 2) {
        story.startCutscene(function () {
            story.printDialog("Hello, Hello, me again. You did great your first night.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Though there is something you may or may not have noticed. Yes, the robots move.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Sorry for not telling you this yesterday.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("They really aren't all that bad, they do however tend to wander outside or into your office. Just use the tricks I told you to deal with them.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog(" Chica and Bonnie usually move the most, So i'll tell you how to deal with them.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Chica always goes towards the office first before heading into the kitchen's back door.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("The kitchen camera is broken so just listen out whenever you have that camera activated to make sure she doesn't escape..", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("You got this, talk to you later Nessa.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
        })
    } else if (num == 3) {
        story.startCutscene(function () {
            story.printDialog("Hey Nessa! You've been doing really good. You know, I don't know why they wanted a night guard.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("No offence to you, It's just that no one would want any of these bots.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Sure, they're cool and high tech, but they all give me the creeps especially..OH!", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Right during the day, right after you left from your shift, some mechanics came by and realized that foxy had been clawing his way out of his barrel.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Uh Foxy is the red pirate fox, his lower half is just a barrel. It has something to do with the Fred E. show or sumthin'.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("So anyways, he might try and crawl out of it. Looking at the footage from your other nights, the bots peek in before attacking.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Foxy most likely won't be able to do that so just keep an eye out to see where he is.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Don't be on the cameras for too long though, he seems to know when the cameras are on him. It's weird, I know.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
        })
    } else if (num == 4) {
        story.startCutscene(function () {
            story.printDialog("Hey..Nessa, uh how are you? *Ahem* I'm hoping you're doing fine.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("I'm sorry, It's just that..yesterday I saw Freddy move..He's usually the only one to not move so it kinda...scared me.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Didn't help that he also looked directly at me. He might move during your shift so be careful.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("He's like REALLY strong so closing the door doesn't work. He can't, however, see stationary objects all that well.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("He tends to walk into tables and walk past people standing COMPLETELY STILL. He goes all over the place so make sure you check every camera.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("..This job is probably demanding too much from you, I understand if you want to..quit after this.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog(" If you want, I can sign your forms and send you on your way after this shift. Either way, See you soon Nessa.", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
        })
    } else if (num == 5) {
        story.startCutscene(function () {
            story.printDialog("...", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("...", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Vanny...", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("I'm going to come fi-find you..", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Don't be afraid...you'll recognize me once you look at me", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("And you WILL look at me..", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("You have to..", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("Your eyes bring light to the darkness..", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("...", 80, 30, 50, 150, 1, 0, story.TextSpeed.Normal)
            story.printDialog("I'm go-going t-to come find you...", 80, 30, 50, 150, 1, 15, story.TextSpeed.Normal)
            story.printDialog("LOOK AT ME", 80, 30, 50, 150, 1, 15, story.TextSpeed.VerySlow)
            timer.debounce("call", 5000, function () {
                Sparkyaggression = 5
            })
        })
    }
}
function SparkyJumscare () {
    if (cam_on) {
        lantern.startLanternEffect(FlashLight)
        splitScreen.setSplitScreenEnabled(false)
        FlashLight.setPosition(77, 58)
    }
    scene.cameraShake(4, 1000)
    night = false
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    1000,
    1000,
    70,
    255,
    6000,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Jumpscare,
    assets.animation`Sparkidy`,
    200,
    false
    )
    timer.after(6000, function () {
        game.setGameOverEffect(false, effects.dissolve)
        game.gameOver(false)
    })
}
// path:
// Route escape
// entry 
// arcade - return
// kitchen
// Return home
// 
// Route attack
// backstage -return 2
// kitchen
// arcade - return 3
// Return home
// 
// can change to other everytime he's on stage
// slowest to move 
// attacks differently: if you move you die
function Freddymove () {
    if (night) {
        if (freddyposition == 6 && freddyattackyouNOmove) {
            timer.after(1000, function () {
                Office.setImage(office_sprites[0])
                freddyattackyouNOmove = false
                Attacking = false
                if (sprites.readDataString(Fred_E_Fazbear, "Route") == "escape") {
                    sprites.setDataString(Fred_E_Fazbear, "Route", "Return")
                } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "Attack") {
                    sprites.setDataString(Fred_E_Fazbear, "Route", "return2")
                } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "return4") {
                    sprites.setDataString(Fred_E_Fazbear, "Route", "return3")
                }
                music.stopAllSounds()
                music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
                music.setVolume(100)
                music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
            })
        } else if (freddyposition == 6) {
            if (!(Attacking)) {
                if (sprites.readDataString(Fred_E_Fazbear, "Route") == "Return") {
                    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(47, 10))
                    freddyposition = 2
                    music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "return2") {
                    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(47, 10))
                    freddyposition = 2
                    music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "return3") {
                    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(37, 2))
                    freddyposition = 0
                    music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                    if (Math.percentChance(50)) {
                        sprites.setDataString(Fred_E_Fazbear, "Route", "Attack")
                    } else {
                        sprites.setDataString(Fred_E_Fazbear, "Route", "escape")
                    }
                } else {
                    if (!(Escaping)) {
                        if (!(Attacking)) {
                            music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                            tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(49, 0))
                            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
                            if (freddydirection == 2) {
                                Office.setImage(office_sprites[1])
                            } else if (freddydirection == 1) {
                                Office.setImage(office_sprites[4])
                            }
                            attackdirection = freddydirection
                            freddydirection = 0
                            timer.after(1000, function () {
                                freddyattackyouNOmove = true
                                Attacking = true
                                music.setVolume(56)
                                music.play(music.createSong(assets.song`freddys song`), music.PlaybackMode.LoopingInBackground)
                            })
                        }
                    }
                }
            }
        } else if (freddyposition == 5) {
            if (randint(1, 20) <= Freddyaggression) {
                tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(32, 7))
                freddyposition = 6
                attackdirection = 1
                freddydirection = attackdirection
                music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
            }
        } else if ((freddyposition == 2 || freddyposition == 1) && Escaping) {
            if (Freddyescape) {
                game.showLongText("An animatronic escaped the building. You lost your job", DialogLayout.Bottom)
                FreddyJumscare()
            }
        } else if (freddyposition == 2) {
            if (randint(1, 20) <= Freddyaggression) {
                if (!(Attacking)) {
                    if (!(Escaping)) {
                        if (cam02alt) {
                            timer.background(function () {
                                music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
                            })
                        }
                        Escaping = true
                        Freddyescape = true
                    }
                }
            } else {
                if (sprites.readDataString(Fred_E_Fazbear, "Route") == "return2") {
                    freddyposition = 0
                    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(37, 2))
                    if (Math.percentChance(50)) {
                        sprites.setDataString(Fred_E_Fazbear, "Route", "Attack")
                    } else {
                        sprites.setDataString(Fred_E_Fazbear, "Route", "escape")
                    }
                    music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                }
            }
        } else if (freddyposition == 1) {
            if (randint(1, 20) <= Freddyaggression) {
                if (!(Attacking)) {
                    if (!(Escaping)) {
                        splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
                        Escaping = true
                        Freddyescape = true
                        fredoutthedoor = true
                    }
                }
            }
        } else {
            if (randint(1, 20) <= Freddyaggression) {
                if (sprites.readDataString(Fred_E_Fazbear, "Route") == "Attack") {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(29, 9))
                        freddyposition = 6
                        attackdirection = 2
                        freddydirection = attackdirection
                        music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                    }
                } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "escape") {
                    tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(27, 0))
                    freddyposition = 1
                    music.play(music.createSong(assets.song`laugh`), music.PlaybackMode.InBackground)
                }
            }
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (night) {
        statusbar.setFlag(SpriteFlag.Invisible, true)
        statusbar.value = 0
    }
})
function Nightselect () {
    controller.moveSprite(FlashLight, 0, 0)
    nightsbeaten = [miniMenu.createMenuItem("Night 1")]
    if (info.highScore() >= 1) {
        nightsbeaten.push(miniMenu.createMenuItem("Night 2"))
    }
    if (info.highScore() >= 2) {
        nightsbeaten.push(miniMenu.createMenuItem("Night 3"))
    }
    if (info.highScore() >= 3) {
        nightsbeaten.push(miniMenu.createMenuItem("Night 4"))
    }
    if (info.highScore() >= 4) {
        nightsbeaten.push(miniMenu.createMenuItem("Night 5"))
    }
    if (info.highScore() >= 5) {
        nightsbeaten.push(miniMenu.createMenuItem("Night 6"))
        nightsbeaten.push(miniMenu.createMenuItem("5/20 Modde"))
    }
    myMenu4 = miniMenu.createMenuFromArray(nightsbeaten)
    myMenu4.setTitle("Select Night")
    myMenu4.setFrame(assets.image`frame`)
    myMenu4.setDimensions(78, 49)
    myMenu4.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    myMenu4.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
    myMenu4.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 15)
    myMenu4.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
    myMenu4.onButtonPressed(controller.A, function (selection, selectedIndex) {
        controller.moveSprite(FlashLight, 150, 150)
        myMenu4.close()
        if (selection == "Night 1") {
            Bonnieaggression = 0
            Chicaaggression = 0
            Foxyaggression = 0
            Freddyaggression = 0
            info.startCountdown(120)
            timer.after(40000, function () {
                Bonnieaggression += 1
                timer.after(40000, function () {
                    Bonnieaggression += 1
                })
            })
        } else if (selection == "Night 2") {
            Bonnieaggression = 4
            Chicaaggression = 6
            Foxyaggression = 0
            Freddyaggression = 0
            info.startCountdown(150)
            timer.after(50000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                timer.after(50000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                })
            })
        } else if (selection == "Night 3") {
            Bonnieaggression = 6
            Chicaaggression = 8
            Foxyaggression = 4
            Freddyaggression = 0
            info.startCountdown(180)
            timer.after(60000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                timer.after(60000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else if (selection == "Night 4") {
            Bonnieaggression = 11
            Chicaaggression = 12
            Foxyaggression = 8
            Freddyaggression = 1
            info.startCountdown(210)
            timer.after(70000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                Freddyaggression = 3
                timer.after(70000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else if (selection == "Night 5") {
            Bonnieaggression = 14
            Chicaaggression = 16
            Foxyaggression = 12
            Freddyaggression = 2
            info.startCountdown(240)
            timer.after(80000, function () {
                Bonnieaggression += 1
                Chicaaggression += 1
                Foxyaggression += 1
                Freddyaggression = 6
                timer.after(80000, function () {
                    Bonnieaggression += 1
                    Chicaaggression += 1
                    Foxyaggression += 1
                })
            })
        } else if (selection == "Night 6") {
            Bonnieaggression = 15
            Chicaaggression = 17
            Foxyaggression = 15
            Freddyaggression = 6
            Sparkyaggression = 5
            info.startCountdown(300)
            timer.after(150000, function () {
                Bonnieaggression += 5
                Chicaaggression += 3
                Foxyaggression += 5
                Freddyaggression += 4
            })
        } else if (selection == "5/20 Modde") {
            Bonnieaggression = 20
            Chicaaggression = 20
            Foxyaggression = 20
            Freddyaggression = 20
            Sparkyaggression = 20
            info.startCountdown(150)
        }
        night = true
        sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "escape")
        sprites.setDataString(Chica_El_Pollo, "Route", "Attack")
        sprites.setDataString(Foxy_Von_Foxtrot_III, "Route", "Attack")
        if (Math.percentChance(50)) {
            sprites.setDataString(Fred_E_Fazbear, "Route", "Attack")
        } else {
            sprites.setDataString(Fred_E_Fazbear, "Route", "escape")
        }
    })
    myMenu4.onButtonPressed(controller.B, function (selection, selectedIndex) {
        game.reset()
    })
}
info.onCountdownEnd(function () {
    if (night) {
        if (info.highScore() == 0) {
            info.setScore(1)
        } else if (info.highScore() == 1) {
            info.setScore(2)
        } else if (info.highScore() == 2) {
            info.setScore(3)
        } else if (info.highScore() == 3) {
            info.setScore(4)
        } else if (info.highScore() == 4) {
            info.setScore(5)
        } else if (info.highScore() == 5) {
            info.setScore(6)
        }
        if (Math.percentChance(40)) {
            game.splash("MINIGAME!!")
            night = false
            Minigame(info.score())
        } else {
            game.setGameOverMessage(true, "You beat Night " + info.score())
            game.gameOver(true)
        }
    } else {
        if (minigameclean >= 15) {
            game.setGameOverMessage(true, "Eh, I guess it's good")
            game.gameOver(true)
        } else if (minigamesecret2) {
            game.setGameOverMessage(true, "2 A , R3MemBeR tHaT")
            game.gameOver(true)
        } else {
            game.setGameOverMessage(true, "Do better next time.")
            game.gameOver(true)
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 0, function (status) {
    splitScreen.setSplitScreenEnabled(false)
    controller.moveSprite(FlashLight, 200, 200)
    cam_on = false
    lantern.startLanternEffect(FlashLight)
    music.play(music.createSong(assets.song`freddys song`), music.PlaybackMode.LoopingInBackground)
    timer.after(randint(1000, 6000), function () {
        FreddyJumscare()
    })
})
statusbars.onStatusReached(StatusBarKind.Magic, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    statusbar.value = 0
    statusbar.setFlag(SpriteFlag.Invisible, true)
    if (minigame == 0) {
        Office.setImage(office_sprites[0])
    } else if (minigame >= 1) {
        Jumpscare.setImage(assets.image`jumpscare`)
    }
    if (Bonnieattack) {
        Bonnieattack = false
        sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "Return")
        Attacking = false
    } else if (Chicaattack) {
        Chicaattack = false
        sprites.setDataString(Chica_El_Pollo, "Route", "escape")
        Attacking = false
    } else if (foxyattack) {
        sprites.setDataString(Foxy_Von_Foxtrot_III, "Route", "Return")
        foxyattack = false
        Attacking = false
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (cam_on) {
        if (!(cam02alt)) {
            cam02alt = true
            tiles.placeOnTile(Cam02, tiles.getTileLocation(47, 14))
            Cam02.setFlag(SpriteFlag.Invisible, true)
        } else {
            cam02alt = false
            Cam02.setFlag(SpriteFlag.Invisible, false)
            tiles.placeOnTile(Cam02, tiles.getTileLocation(35, 1))
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (cam02alt) {
        Lockbar2.value = 0
        if (Chicaescape) {
            Chicaescape = false
            Escaping = false
            sprites.setDataString(Chica_El_Pollo, "Route", "Return")
            chicaposition = 1
        } else if (Freddyescape) {
            Freddyescape = false
            Escaping = false
            if (sprites.readDataString(Fred_E_Fazbear, "Route") == "return2") {
                sprites.setDataString(Fred_E_Fazbear, "Route", "return4")
                freddyposition = 5
            } else if (sprites.readDataString(Fred_E_Fazbear, "Route") == "Return") {
                freddyposition = 0
                if (Math.percentChance(50)) {
                    sprites.setDataString(Fred_E_Fazbear, "Route", "Attack")
                } else {
                    sprites.setDataString(Fred_E_Fazbear, "Route", "escape")
                }
                tiles.placeOnTile(Fred_E_Fazbear, tiles.getTileLocation(37, 2))
            }
        }
        Lockbar2.setFlag(SpriteFlag.Invisible, true)
    } else {
        Lockbar1.value = 0
        if (bonnieescape) {
            bonnieescape = false
            Escaping = false
            if (Math.percentChance(50)) {
                Bonnieposition = 0
                sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "Attack")
            } else {
                Bonnieposition = 3
                sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "Attack")
            }
        } else if (Freddyescape && fredoutthedoor) {
            Freddyescape = false
            fredoutthedoor = false
            Escaping = false
            freddyposition = 5
        }
        Lockbar1.setFlag(SpriteFlag.Invisible, true)
    }
})
function ChicaJumscare () {
    if (cam_on) {
        lantern.startLanternEffect(FlashLight)
        splitScreen.setSplitScreenEnabled(false)
        FlashLight.setPosition(77, 58)
    }
    scene.cameraShake(4, 1000)
    night = false
    music.play(music.createSoundEffect(WaveShape.Noise, 3867, 4116, 174, 174, 1100, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Jumpscare,
    assets.animation`El Jumpscare`,
    75,
    false
    )
    timer.after(1000, function () {
        if (minigame > 0) {
            game.setGameOverMessage(true, "6 D reme-mber t-hat")
            game.setGameOverEffect(true, effects.none)
            game.gameOver(true)
        } else {
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        }
    })
}
// Path: 
// Stage
// ballpit or stage
// ballpit to arcade
// stage to backstage
// backstage to stage
// arcade to ballpit
// entry or kitchen
// stage
// Always attacks first, slower than bonnie v
function Chicamove () {
    if (night) {
        if (chicaposition == 6 && Chicaattack) {
            timer.after(1000, function () {
                if (Chicaattack) {
                    ChicaJumscare()
                }
            })
        } else if (chicaposition == 6) {
            if (sprites.readDataString(Chica_El_Pollo, "Route") == "escape") {
                if (attackdirection == 2) {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(26, 7))
                    chicaposition = 1
                } else if (attackdirection == 1) {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(34, 7))
                    chicaposition = 5
                }
                attackdirection = 0
            } else if (sprites.readDataString(Chica_El_Pollo, "Route") == "Attack") {
                if (!(Escaping)) {
                    if (!(Attacking)) {
                        tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(49, 0))
                        if (chicadirection == 2) {
                            Office.setImage(office_sprites[3])
                        } else if (chicadirection == 1) {
                            Office.setImage(office_sprites[6])
                        }
                        Chicaattack = true
                        Attacking = true
                        attackdirection = chicadirection
                        chicadirection = 0
                    }
                }
            }
        } else if (chicaposition == 5) {
            if (randint(1, 20) <= Chicaaggression) {
                if (sprites.readDataString(Chica_El_Pollo, "Route") == "Return") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(41, 1))
                    chicaposition = 3
                } else if (sprites.readDataString(Chica_El_Pollo, "Route") == "Attack") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(34, 7))
                    chicaposition = 6
                    attackdirection = 1
                    chicadirection = attackdirection
                }
            }
        } else if (chicaposition == 3) {
            if (randint(1, 20) <= Chicaaggression) {
                if (sprites.readDataString(Chica_El_Pollo, "Route") == "Return") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(37, 1))
                    chicaposition = 0
                    sprites.setDataString(Chica_El_Pollo, "Route", "Attack")
                } else if (sprites.readDataString(Chica_El_Pollo, "Route") == "Attack") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(41, 1))
                    chicaposition = 5
                }
            }
        } else if (chicaposition == 2 && Escaping) {
            if (Chicaescape) {
                game.showLongText("An animatronic escaped the building. You lost your job", DialogLayout.Bottom)
                ChicaJumscare()
            }
        } else if (chicaposition == 2) {
            if (randint(1, 20) <= Chicaaggression) {
                if (!(Attacking)) {
                    if (!(Escaping)) {
                        if (cam02alt) {
                            timer.background(function () {
                                music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
                            })
                        }
                        Escaping = true
                        Chicaescape = true
                    }
                }
            } else {
                sprites.setDataString(Chica_El_Pollo, "Route", "Return")
                chicaposition = 1
                tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(35, 1))
            }
        } else if (chicaposition == 1) {
            if (randint(1, 20) <= Chicaaggression) {
                if (sprites.readDataString(Chica_El_Pollo, "Route") == "Attack") {
                    if (Math.percentChance(50)) {
                        tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(26, 7))
                        chicaposition = 6
                        attackdirection = 2
                        chicadirection = attackdirection
                    } else {
                        chicaposition = 3
                    }
                } else if (sprites.readDataString(Chica_El_Pollo, "Route") == "escape") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(41, 13))
                    chicaposition = 2
                } else if (sprites.readDataString(Chica_El_Pollo, "Route") == "Return") {
                    tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(37, 1))
                    chicaposition = 0
                    sprites.setDataString(Chica_El_Pollo, "Route", "Attack")
                }
            }
        } else {
            if (randint(1, 20) <= Chicaaggression) {
                tiles.placeOnTile(Chica_El_Pollo, tiles.getTileLocation(35, 1))
                chicaposition = 1
            }
        }
    }
}
function Minigame (num: number) {
    music.stopAllSounds()
    splitScreen.setSplitScreenEnabled(false)
    controller.moveSprite(FlashLight, 150, 150)
    cam_on = false
    screentimewearoff = false
    lantern.startLanternEffect(FlashLight)
    Monitor.setFlag(SpriteFlag.Invisible, true)
    night = false
    Bonnieposition2 = 0
    Bonnieaggression = 0
    Bonnieattack = false
    chicaposition = 0
    Chicaaggression = 0
    Chicaattack = false
    Foxyaggression = 0
    foxyposition = 0
    foxyattack = false
    freddyposition = 0
    Freddyaggression = 0
    freddyattackyouNOmove = false
    Attacking = false
    Escaping = false
    if (num == 1) {
        Office.setImage(assets.image`Findtheplushes`)
        lantern.startLanternEffect(FlashLight)
        lantern.setBreathingEnabled(false)
        lantern.setLightBandWidth(20)
        game.showLongText("collect five plushes. If you see foxy, hold X on him.", DialogLayout.Bottom)
        Door1.setPosition(18, 94)
        Door2.setPosition(137, 94)
        Foxyaggression = 5
    } else if (num == 2) {
        Office.setImage(assets.image`myImage7`)
        Monitor.setImage(assets.image`myImage8`)
        Monitor.setFlag(SpriteFlag.Invisible, false)
        lantern.startLanternEffect(FlashLight)
        lantern.setBreathingEnabled(false)
        lantern.setLightBandWidth(10)
        info.startCountdown(100)
        game.showLongText("Sweep until the timer runs out. Hold X on Bonnie if you see him.", DialogLayout.Bottom)
        Door1.setPosition(15, 56)
        Door2.setPosition(140, 57)
        Monitor.setPosition(77, 72)
        Bonnieaggression = 10
    } else if (num == 3) {
        Office.setImage(assets.image`myImage20`)
        lantern.startLanternEffect(FlashLight)
        lantern.setBreathingEnabled(true)
        lantern.setLightBandWidth(20)
        game.showLongText("Click on freddy's face to take it off. Once it's off time your Shift button with the sonar sound to fix his eye.", DialogLayout.Center)
        Monitor.setPosition(79, 50)
        minigamefreddyface = true
    } else if (num == 4) {
        Office.setImage(assets.image`myImage31`)
        lantern.startLanternEffect(FlashLight)
        lantern.setBreathingEnabled(true)
        lantern.setLightBandWidth(20)
        game.showLongText("Now click on freddy's tummy to take it off. Once it's off time your Shift button with the sonar sound and space with the buzzer sound.", DialogLayout.Center)
        Monitor.setPosition(79, 113)
        minigamefreddybody1 = true
    } else {
        Office.setImage(assets.image`myImage26`)
        lantern.setBreathingEnabled(true)
        lantern.setLightBandWidth(10)
        game.showLongText("Keep going until you find the exit. Don't move if you here something.", DialogLayout.Center)
        minigametunnelCD = true
    }
    minigame = num
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (night || minigame > 0) {
        if (Attacking) {
            if (attackdirection == 1) {
                if (FlashLight.overlapsWith(Door2)) {
                    statusbar.setFlag(SpriteFlag.Invisible, false)
                }
            } else if (attackdirection == 2) {
                if (FlashLight.overlapsWith(Door1)) {
                    statusbar.setFlag(SpriteFlag.Invisible, false)
                }
            }
        }
    }
})
function The_Party_Room () {
    Monitor.setFlag(SpriteFlag.Invisible, true)
    color.startFade(color.Black, color.originalPalette, 2000)
    Office.setImage(assets.image`Party Room`)
    timer.debounce("action", 500, function () {
        story.startCutscene(function () {
            story.printDialog("This is the party room door.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("It's been closed ever since I've been here.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("..Actually, it's been closed longer than that...", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("It's a special room only open for birthday parties and other events.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("The last time I saw in there was for my sibling's birthday.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            story.printDialog("I've got the key, but...I need to know if I'm ready to open it or not.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
            if (game.askForString("What is my Sibling's name. C_____Y.", 7) == "cassidy") {
                Gameoversequence()
            } else {
                story.printDialog("That's not it. I guess I'm not ready.", 80, 30, 50, 150, 1, 15, story.TextSpeed.Slow)
                game.reset()
            }
        })
    })
}
function Title_Screen () {
    if (randint(1, 4) == 1) {
        scene.setBackgroundImage(assets.image`title0`)
    } else if (randint(1, 4) == 2) {
        scene.setBackgroundImage(assets.image`title2`)
    } else if (randint(1, 4) == 3) {
        scene.setBackgroundImage(assets.image`title1`)
    } else {
        scene.setBackgroundImage(assets.image`title`)
    }
    Title_list = [miniMenu.createMenuItem("Start Night"), miniMenu.createMenuItem("Night select")]
    if (info.highScore() >= 5) {
        Title_list.push(miniMenu.createMenuItem("Extras"))
    }
    myMenu = miniMenu.createMenuFromArray(Title_list)
    game.setDialogCursor(assets.image`pizza_cursor`)
    game.setDialogTextColor(1)
    game.setDialogFrame(assets.image`framee`)
    myMenu.setDimensions(78, 49)
    myMenu.setFrame(assets.image`frame`)
    myMenu.setPosition(43, 70)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            Start()
            StartNight(info.highScore() + 1)
        } else if (selectedIndex == 1) {
            Start()
            Nightselect()
        } else if (selectedIndex == 2) {
            Extras()
        }
        myMenu.close()
    })
}
function FoxyJumscare () {
    if (cam_on) {
        lantern.startLanternEffect(FlashLight)
        splitScreen.setSplitScreenEnabled(false)
        FlashLight.setPosition(77, 58)
    }
    scene.cameraShake(4, 1000)
    night = false
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1449, 64, 159, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    Jumpscare,
    assets.animation`peek-a-boo`,
    75,
    false
    )
    timer.after(1000, function () {
        if (minigame > 0) {
            game.setGameOverMessage(true, "Boo, you suck")
            game.setGameOverEffect(true, effects.none)
            game.gameOver(true)
        } else {
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        }
    })
}
function Extras () {
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("Animatronics"),
    miniMenu.createMenuItem("Map"),
    miniMenu.createMenuItem("Minigames")
    )
    myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        Start()
        lantern.stopLanternEffect()
        myMenu2.setButtonEventsEnabled(false)
        if (selection == "Animatronics") {
            newwindow = miniMenu.createMenu(
            miniMenu.createMenuItem("Fred E. Fazbear"),
            miniMenu.createMenuItem("Bonnie Bunzo The Rabbit"),
            miniMenu.createMenuItem("Chica El Pollo"),
            miniMenu.createMenuItem("Foxy Von Foxtrot III"),
            miniMenu.createMenuItem("Sparky Volt")
            )
            newwindow.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
            newwindow.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
            newwindow.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
            newwindow.setPosition(142, 39)
            newwindow.onButtonPressed(controller.A, function (selection, selectedIndex) {
                myMenu2.close()
                if (selection == "Fred E. Fazbear") {
                    Jumpscare.setImage(assets.image`myImage17`)
                } else if (selection == "Bonnie Bunzo The Rabbit") {
                    Jumpscare.setImage(assets.image`myImage4`)
                } else if (selection == "Chica El Pollo") {
                    Jumpscare.setImage(assets.image`myImage`)
                } else if (selection == "Foxy Von Foxtrot III") {
                    Jumpscare.setImage(assets.image`myImage2`)
                } else if (selection == "Sparky Volt") {
                    Jumpscare.setImage(assets.image`myImage5`)
                }
            })
            newwindow.onButtonPressed(controller.left, function (selection, selectedIndex) {
                game.reset()
            })
        } else if (selection == "Map") {
            FlashLight.setStayInScreen(false)
            scene.cameraFollowSprite(FlashLight)
            Office.setFlag(SpriteFlag.Invisible, true)
            myMenu2.close()
            tiles.setCurrentTilemap(tilemap`level2`)
            scene.setBackgroundImage(assets.image`jumpscare`)
            game.splash("Go explore")
        } else if (selection == "Minigames") {
            newwindow = miniMenu.createMenu(
            miniMenu.createMenuItem("Find the Plushes"),
            miniMenu.createMenuItem("Gotta Sweep"),
            miniMenu.createMenuItem("Repair Freddy"),
            miniMenu.createMenuItem("Repair Freddy 2"),
            miniMenu.createMenuItem("Play-tunnel maze")
            )
            newwindow.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
            newwindow.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
            newwindow.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 1)
            newwindow.onButtonPressed(controller.A, function (selection, selectedIndex) {
                newwindow.close()
                myMenu2.close()
                Minigame(selectedIndex + 1)
            })
            newwindow.onButtonPressed(controller.B, function (selection, selectedIndex) {
                newwindow.close()
                myMenu2.setButtonEventsEnabled(true)
            })
        }
    })
    myMenu2.onButtonPressed(controller.B, function (selection, selectedIndex) {
        game.reset()
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (night) {
        if (FlashLight.overlapsWith(Monitor)) {
            if (Powerbar.value > 0) {
                if (!(cam_on)) {
                    color.startFade(color.Black, color.originalPalette, 200)
                    splitScreen.setSplitScreenEnabled(true)
                    controller.moveSprite(FlashLight, 0, 0)
                    cam_on = true
                    lantern.stopLanternEffect()
                    Screentime = game.runtime()
                    screentimewearoff = true
                } else {
                    splitScreen.setSplitScreenEnabled(false)
                    controller.moveSprite(FlashLight, 150, 150)
                    cam_on = false
                    lantern.startLanternEffect(FlashLight)
                    timer.after(3000, function () {
                        if (!(cam_on)) {
                            screentimewearoff = false
                        }
                    })
                }
            }
        }
    }
})
// path: 7
// Stage
// entry
// ballpit or stage
// ballpit to arcade
// stage to backstage
// backstage to stage
// arcade to ballpit
// stage
// Never attacks first
function Bonniemove () {
    if (night) {
        if (Bonnieposition == 6 && Bonnieattack) {
            timer.after(1000, function () {
                if (Bonnieattack) {
                    BonnieJumscare()
                }
            })
        } else if (Bonnieposition == 6) {
            if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Return") {
                if (attackdirection == 2) {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(28, 7))
                    Bonnieposition = 1
                } else if (attackdirection == 1) {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(35, 8))
                    Bonnieposition = 5
                }
                attackdirection = 0
            } else if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Attack") {
                if (!(Escaping)) {
                    if (!(Attacking)) {
                        tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(49, 0))
                        if (bonniedirection == 2) {
                            Office.setImage(office_sprites[2])
                        } else if (bonniedirection == 1) {
                            Office.setImage(office_sprites[5])
                        }
                        Bonnieattack = true
                        Attacking = true
                        attackdirection = bonniedirection
                        bonniedirection = 0
                    }
                }
            }
        } else if (Bonnieposition == 5) {
            if (randint(1, 20) <= Bonnieaggression) {
                if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Return") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(43, 2))
                    Bonnieposition = 3
                } else if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Attack") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(35, 8))
                    Bonnieposition = 6
                    attackdirection = 1
                    bonniedirection = attackdirection
                }
            }
        } else if (Bonnieposition == 3) {
            if (randint(1, 20) <= Bonnieaggression) {
                if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Return") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(37, 3))
                    Bonnieposition = 0
                    sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "escape")
                } else if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Attack") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(43, 2))
                    Bonnieposition = 5
                }
            }
        } else if (Bonnieposition == 2 && Escaping) {
            if (bonnieescape) {
                game.showLongText("An animatronic escaped the building. You lost your job", DialogLayout.Bottom)
                BonnieJumscare()
            }
        } else if (Bonnieposition == 2) {
            if (randint(1, 20) <= Bonnieaggression) {
                if (!(Attacking)) {
                    if (!(Escaping)) {
                        splitScreen.cameraShake(splitScreen.Camera.Camera1, 4, 500)
                        Escaping = true
                        bonnieescape = true
                    }
                }
            } else {
                if (Math.percentChance(50)) {
                    Bonnieposition = 0
                    sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "Attack")
                } else {
                    Bonnieposition = 3
                    sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "Attack")
                }
            }
        } else if (Bonnieposition == 1) {
            if (randint(1, 20) <= Bonnieaggression) {
                if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Attack") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(28, 7))
                    Bonnieposition = 6
                    attackdirection = 2
                    bonniedirection = attackdirection
                } else if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "escape") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(28, 2))
                    Bonnieposition = 2
                } else if (sprites.readDataString(Bonnie_Bunzo_rabbit, "Route") == "Return") {
                    tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(37, 3))
                    Bonnieposition = 0
                    sprites.setDataString(Bonnie_Bunzo_rabbit, "Route", "escape")
                }
            }
        } else {
            if (randint(1, 20) <= Bonnieaggression) {
                tiles.placeOnTile(Bonnie_Bunzo_rabbit, tiles.getTileLocation(35, 2))
                Bonnieposition = 1
            }
        }
    }
}
// Z - player 1 A
// 
// X - Player 1 B
// 
// Space - Player 2 B
// 
// Arrows - player 1 movement keys
// 
// Shift - player 2 A
// 
// A - player 2 left
// 
// S - player 2 right
let minigametunnelprog = 0
let minigamefreddysaved = 0
let minigamefreddytimed = 0
let secret = false
let minigamecleancooldown = false
let Minigamesecret1 = false
let MinigamePlushscount = 0
let Minigameplushactive = false
let bonniedirection = 0
let Screentime = 0
let newwindow: miniMenu.MenuSprite = null
let myMenu2: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let Title_list: miniMenu.MenuItem[] = []
let minigametunnelCD = false
let minigamefreddybody1 = false
let minigamefreddyface = false
let Bonnieposition2 = 0
let screentimewearoff = false
let chicadirection = 0
let bonnieescape = false
let Chicaescape = false
let Chicaattack = false
let Bonnieattack = false
let minigamesecret2 = false
let minigameclean = 0
let myMenu4: miniMenu.MenuSprite = null
let nightsbeaten: miniMenu.MenuItem[] = []
let fredoutthedoor = false
let Freddyescape = false
let freddydirection = 0
let freddyattackyouNOmove = false
let chicaposition = 0
let Bonnieposition = 0
let freddyposition = 0
let office_sprites: Image[] = []
let Powerbar: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let Cam03: Sprite = null
let Cam02: Sprite = null
let Cam01: Sprite = null
let Door2: Sprite = null
let Door1: Sprite = null
let Monitor: Sprite = null
let minigame = 0
let Cam04: Sprite = null
let Office: Sprite = null
let FlashLight: Sprite = null
let Fred_E_Fazbear: Sprite = null
let Chica_El_Pollo: Sprite = null
let Bonnie_Bunzo_rabbit: Sprite = null
let Freddyaggression = 0
let Chicaaggression = 0
let Bonnieaggression = 0
let myMenu3: miniMenu.MenuSprite = null
let Lockbar2: StatusBarSprite = null
let Lockbar1: StatusBarSprite = null
let sparkylookatmecams = false
let Sparky_Volt: Sprite = null
let Sparkyaggression = 0
let Jumpscare: Sprite = null
let Sparkyattack = false
let Sparkyposition = 0
let Foxyaggression = 0
let cam02alt = false
let attackdirection = 0
let cam04alt = false
let foxydirection = 0
let Attacking = false
let Escaping = false
let Foxy_Von_Foxtrot_III: Sprite = null
let foxyattack = false
let foxyposition = 0
let cam_on = false
let night = false
Title_Screen()
game.onUpdateInterval(5500 * randint(0.9, 1.1), function () {
    if (night) {
        Bonniemove()
    }
})
game.onUpdateInterval(5600 * randint(0.9, 1.1), function () {
    if (night) {
        Foxymove()
    }
})
game.onUpdateInterval(500, function () {
    if (controller.player2.isPressed(ControllerButton.B)) {
        if (Escaping) {
            if (!(cam02alt)) {
                Lockbar1.value += 1
            } else {
                Lockbar2.value += 1
            }
        }
    } else if (controller.B.isPressed()) {
        if (Attacking) {
            statusbar.value += 1
        }
    }
})
game.onUpdateInterval(4500 * randint(0.93, 1.4), function () {
    if (night) {
        Sparkymove()
    }
})
game.onUpdateInterval(randint(1000, 5000), function () {
    if (night) {
        timer.background(function () {
            if (Math.percentChance(20)) {
                for (let index = 0; index < 5; index++) {
                    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
                    pause(1000)
                }
            }
        })
    }
})
forever(function () {
    if (minigame == 1) {
        if (Minigameplushactive) {
            if (controller.A.isPressed()) {
                if (FlashLight.overlapsWith(Monitor)) {
                    Minigameplushactive = false
                    Monitor.setPosition(-4, -3)
                    MinigamePlushscount += 1
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                    Foxyaggression += 2
                    if (Minigamesecret1) {
                        game.showLongText("4 S (ReMemb3R T4aT)", DialogLayout.Center)
                        game.gameOver(true)
                    } else if (MinigamePlushscount == 5) {
                        game.setGameOverMessage(true, "You may continue!")
                        game.gameOver(true)
                    }
                    Monitor.setFlag(SpriteFlag.Invisible, true)
                }
            }
        }
    } else if (minigame == 2) {
        if (controller.A.isPressed()) {
            if (FlashLight.overlapsWith(Monitor)) {
                if (!(minigamecleancooldown)) {
                    animation.runImageAnimation(
                    Monitor,
                    assets.animation`myAnim`,
                    100,
                    false
                    )
                    for (let index = 0; index < 2; index++) {
                        timer.background(function () {
                            music.play(music.createSoundEffect(WaveShape.Noise, 3300, 2383, 46, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                            pause(500)
                        })
                    }
                    minigamecleancooldown = true
                    timer.debounce("sweep", 1000, function () {
                        minigameclean += 1
                        minigamecleancooldown = false
                    })
                    if (secret) {
                        minigamesecret2 = true
                        Door1.setImage(assets.image`box`)
                        Door1.setFlag(SpriteFlag.Invisible, true)
                    }
                }
            }
        }
    } else if (minigame == 3) {
        if (controller.A.isPressed()) {
            if (FlashLight.overlapsWith(Monitor)) {
                if (minigamefreddyface) {
                    Office.setImage(assets.image`myImage25`)
                    minigamefreddyface = false
                }
            }
        } else if (controller.player2.isPressed(ControllerButton.A)) {
            minigamefreddytimed += 1
        }
    } else if (minigame == 4) {
        if (controller.A.isPressed()) {
            if (FlashLight.overlapsWith(Monitor)) {
                if (minigamefreddybody1) {
                    Office.setImage(assets.image`myImage24`)
                    minigamefreddybody1 = false
                }
            }
        } else if (controller.player2.isPressed(ControllerButton.A)) {
            minigamefreddytimed += 1
        } else if (controller.player2.isPressed(ControllerButton.B)) {
            minigamefreddysaved += 1
        }
    } else if (minigame == 5) {
        if (controller.A.isPressed()) {
            if (minigametunnelCD) {
                color.FadeToBlack.startScreenEffect(1000)
                color.pauseUntilFadeDone()
                if (minigametunnelprog == 0) {
                    Office.setImage(assets.image`myImage27`)
                } else if (minigametunnelprog == 1) {
                    Office.setImage(assets.image`myImage28`)
                } else if (minigametunnelprog == 2) {
                    Office.setImage(assets.image`myImage29`)
                } else if (minigametunnelprog == 3) {
                    Office.setImage(assets.image`myImage30`)
                } else if (minigametunnelprog == 4) {
                    Office.setImage(assets.image`myImage26`)
                } else if (minigametunnelprog == 5) {
                    Office.setImage(assets.image`myImage27`)
                } else if (minigametunnelprog == 6) {
                    Office.setImage(assets.image`myImage28`)
                } else if (minigametunnelprog == 7) {
                    Office.setImage(assets.image`myImage29`)
                } else if (minigametunnelprog == 8) {
                    Office.setImage(assets.image`myImage30`)
                } else {
                    game.setGameOverMessage(true, "boo, you suck")
                    game.gameOver(true)
                }
                minigametunnelprog += 1
                color.startFadeFromCurrent(color.originalPalette, 1000)
                minigametunnelCD = false
                timer.debounce("action", 1000, function () {
                    minigametunnelCD = true
                })
            }
        }
    }
})
game.onUpdateInterval(5600 * randint(0.92, 1.2), function () {
    if (night) {
        Chicamove()
    }
})
game.onUpdateInterval(randint(5000, 7000), function () {
    let minigamefreddydone = 0
    if (minigame == 1) {
        if (!(Minigameplushactive)) {
            if (Math.percentChance(25)) {
                if (Math.percentChance(50)) {
                    Monitor.setPosition(randint(25, 134), 17)
                } else {
                    Monitor.setPosition(randint(25, 134), 61)
                }
                if (MinigamePlushscount == 0) {
                    Monitor.setImage(assets.image`Fredster`)
                } else if (MinigamePlushscount == 1) {
                    Monitor.setImage(assets.image`BonBOn`)
                } else if (MinigamePlushscount == 2) {
                    Monitor.setImage(assets.image`Pollo`)
                } else if (MinigamePlushscount == 3) {
                    Monitor.setImage(assets.image`foxly`)
                } else if (MinigamePlushscount == 4) {
                    Monitor.setImage(assets.image`sparky`)
                }
                Monitor.setFlag(SpriteFlag.Invisible, false)
                if (Math.percentChance(5.5 * MinigamePlushscount)) {
                    Monitor.setImage(assets.image`Springy`)
                    Minigamesecret1 = true
                }
                Minigameplushactive = true
            }
        }
        if (foxyposition == 1 && foxyattack) {
            timer.after(500, function () {
                if (foxyattack) {
                    controller.moveSprite(FlashLight, 0, 0)
                    FlashLight.setPosition(76, 62)
                    FoxyJumscare()
                } else {
                    foxyposition = 0
                }
            })
        } else if (Math.percentChance(2 * Foxyaggression)) {
            if (Math.percentChance(50)) {
                attackdirection = 2
                Jumpscare.setImage(assets.image`OverThere`)
            } else {
                attackdirection = 1
                Jumpscare.setImage(assets.image`Overhere`)
            }
            foxyposition = 1
            Attacking = true
            foxyattack = true
        }
    } else if (minigame == 2) {
        if (!(minigamesecret2)) {
            if (Math.percentChance(5.5)) {
                Door1.setImage(assets.image`Springy`)
                Door1.setFlag(SpriteFlag.Invisible, false)
                secret = true
            }
        }
        if (Bonnieposition == 1 && Bonnieattack) {
            timer.after(500, function () {
                if (Bonnieattack) {
                    FlashLight.setPosition(76, 62)
                    controller.moveSprite(FlashLight, 0, 0)
                    BonnieJumscare()
                } else {
                    Bonnieposition = 0
                }
            })
        } else if (Math.percentChance(5 * Bonnieaggression)) {
            if (Math.percentChance(50)) {
                attackdirection = 2
                Jumpscare.setImage(assets.image`myImage18`)
            } else {
                attackdirection = 1
                Jumpscare.setImage(assets.image`myImage19`)
            }
            Bonnieposition = 1
            Attacking = true
            Bonnieattack = true
            timer.background(function () {
                for (let index = 0; index < 4; index++) {
                    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 109, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                    pause(1000)
                }
            })
        }
    } else if (minigame == 3) {
        if (!(minigamefreddyface) && (!(minigamefreddybody1) && !(minigamefreddydone))) {
            if (Math.percentChance(50)) {
                scene.cameraShake(2, 500)
                music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
                minigamefreddysaved = minigamefreddytimed
                timer.after(500, function () {
                    if (minigamefreddytimed > minigamefreddysaved) {
                        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "success", 1)
                    } else {
                        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "fail", -1)
                    }
                    if (sprites.readDataNumber(Office, "fail") == -3) {
                        timer.after(500, function () {
                            FlashLight.setPosition(76, 62)
                            controller.moveSprite(FlashLight, 0, 0)
                            FreddyJumscare()
                        })
                    } else if (sprites.readDataNumber(Office, "success") == 10) {
                        game.setGameOverMessage(true, "3 S r3m3MbEr t4at")
                        game.gameOver(true)
                    }
                })
            }
        }
    } else if (minigame == 4) {
        if (!(minigamefreddyface) && (!(minigamefreddybody1) && !(minigamefreddydone))) {
            if (Math.percentChance(50)) {
                scene.cameraShake(2, 500)
                music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
                minigamefreddysaved = minigamefreddytimed
                timer.after(500, function () {
                    if (minigamefreddytimed > minigamefreddysaved) {
                        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "success", 1)
                    } else {
                        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "fail", -1)
                    }
                    if (sprites.readDataNumber(Office, "fail") == -3) {
                        timer.after(500, function () {
                            FlashLight.setPosition(76, 62)
                            controller.moveSprite(FlashLight, 0, 0)
                            FreddyJumscare()
                        })
                    } else if (sprites.readDataNumber(Office, "success") == 5) {
                        Office.setImage(assets.image`myImage22`)
                    } else if (sprites.readDataNumber(Office, "success") == 10) {
                        game.setGameOverMessage(true, "5 I r3m3MbEr t4at")
                        game.gameOver(true)
                    }
                })
            } else if (Math.percentChance(25)) {
                scene.cameraShake(2, 500)
                music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                minigamefreddytimed = minigamefreddysaved
                timer.after(500, function () {
                    if (minigamefreddysaved > minigamefreddytimed) {
                        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "success", 1)
                    } else {
                        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
                        sprites.changeDataNumberBy(Office, "fail", -1)
                    }
                    if (sprites.readDataNumber(Office, "fail") == -3) {
                        timer.after(500, function () {
                            FlashLight.setPosition(76, 62)
                            controller.moveSprite(FlashLight, 0, 0)
                            FreddyJumscare()
                        })
                    } else if (sprites.readDataNumber(Office, "success") == 5) {
                        Office.setImage(assets.image`myImage22`)
                    } else if (sprites.readDataNumber(Office, "success") == 10) {
                        game.setGameOverMessage(true, "5 I r3m3MbEr t4at")
                        game.gameOver(true)
                    }
                })
            }
        }
    } else if (minigame == 5) {
        if (Math.percentChance(75)) {
            for (let index = 0; index < 2; index++) {
                music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
                pause(1000)
            }
            timer.after(500, function () {
                if (controller.anyButton.isPressed()) {
                    ChicaJumscare()
                }
            })
        }
    }
})
forever(function () {
    if (freddyattackyouNOmove) {
        if (controller.anyButton.isPressed()) {
            timer.after(1000, function () {
                if (controller.anyButton.isPressed()) {
                    FreddyJumscare()
                }
            })
        }
    }
    if (Sparkyattack) {
        if (cam_on) {
            timer.after(5000, function () {
                if (cam_on) {
                    SparkyJumscare()
                }
            })
        }
    }
    if (sparkylookatmecams) {
        if (!(cam_on)) {
            timer.after(3000, function () {
                if (!(cam_on)) {
                    SparkyJumscare()
                }
            })
        } else if (Sparkyposition == 2 && cam02alt) {
            timer.after(3000, function () {
                if (Sparkyposition == 2 && cam02alt) {
                    SparkyJumscare()
                }
            })
        } else if (Sparkyposition == 3 && !(cam04alt)) {
            timer.after(3000, function () {
                if (Sparkyposition == 3 && !(cam04alt)) {
                    SparkyJumscare()
                }
            })
        } else if (Sparkyposition == 5 && cam04alt) {
            timer.after(3000, function () {
                if (Sparkyposition == 5 && cam04alt) {
                    SparkyJumscare()
                }
            })
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (night) {
        if (screentimewearoff) {
            if (game.runtime() - Screentime > 15000) {
                Powerbar.value += -2
            }
        } else {
            if (Powerbar.value > 0) {
                Powerbar.value += 1
            }
        }
    }
})
game.onUpdateInterval(6000 * randint(0.9, 1.4), function () {
    if (night) {
        Freddymove()
    }
})
