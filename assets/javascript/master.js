let _main = document.getElementById('main')
        let _h2 = document.querySelectorAll(' h2')
        let _about = document.getElementById(' about')
        let _work = document.getElementById('scroll2')
        let _workfig = document.getElementById('workfig')
        let _h3 = document.querySelectorAll('#workfig>h3')
        let p = document.querySelectorAll('#workfig>p')


        _main.addEventListener('scroll', (e) => {
            let st = e.target.scrollTop
            // document.getElementsByTagName('span')[0].innerHTML = st

            // .....page1.....

            _h2[0].style.left = (40 - st / 2) + 'px'
            _h2[0].nextElementSibling.style.left = (350 - st) + 'px'
            _h2[0].nextElementSibling.nextElementSibling.style.width = (200 + (st / 100)) + 'px'
            _h2[0].nextElementSibling.nextElementSibling.style.height = (200 + (st / 100)) + 'px'


            _h2[1].style.left = (500 + st) + 'px'
            _h2[1].nextElementSibling.style.left = (750 + st / 2) + 'px'
            _h2[1].nextElementSibling.nextElementSibling.style.left = (1000 + st / 4) + 'px'




            if (st > 1200) {


                _h2[2].style.bottom = ((st / 2)) + 'px'
                _h2[2].nextElementSibling.style.bottom = ((st / 2)) + 'px'
                _h2[0].nextElementSibling.nextElementSibling.style.top = (-(st / 9)) + 'px'




                // .....page3.....

                if (st > 2428) {
                    _h2[3].classList.add('fix1')
                    _work.style.backgroundColor = 'black'




                    if (st > 2900 && st < 4200) {
                        _work.style.backgroundColor = '#ff914d'
                        _h3[0].style.right = -((st / 3)) + 'px'
                        p[0].style.right = -((st / 3)) + 'px'
                        p[0].style.opacity = '1'

                        if (st > 3500 && st < 4200) {
                            _h3[0].style.right = '100%'
                            p[0].style.right = '50%'
                            p[0].style.opacity = '0'
                        }

                    }
                    
                    else if (st > 4200) {



                        _work.style.backgroundColor = 'rgb(116, 255, 146)'
                        _h3[1].style.right = -(st / 3) + 'px'
                        p[1].style.right = -((st / 3)) + 'px'
                        p[1].style.opacity = '1'
                        if (st > 4800 && st < 5400) {
                            p[1].style.opacity = '0'

                            _h3[1].style.right = '100%'
                            p[1].style.right = '50%'
                            p[1].style.opacity = '0'
                        }


                        else if (st > 5400) {

                            _work.style.backgroundColor = 'black'
                            _h3[2].style.right = -(st / 3) + 'px'
                            p[2].style.right = -(st / 3) + 'px'
                            p[2].style.opacity = '1'

                            if (st > 6200 && st < 6800) {
                                _h3[2].style.right = '100%'
                                p[2].style.right = '50%'
                                p[2].style.opacity = '0'
                            }
                            else if (st > 6800) {


                                _work.style.backgroundColor = 'pink'
                                // _h3[3].style.right = -(st / 2) + 'px'

                            }
                            else {
                                _work.style.backgroundColor = 'black'
                                // _h3[3].style.right = '100%'

                            }
                        }
                        else {
                            _work.style.backgroundColor = 'rgb(116, 255, 146)'
                            // _h3[1].style.right = '100%'

                        }
                    }
                    else {
                        _work.style.backgroundColor = '#ff914d'

                        // _h3[2].style.right = '100%'


                    }

                }
                else {
                    _h2[3].classList.remove('fix1')
                    _work.style.backgroundColor = 'black'


                }

            }

            else {
                _h2[0].nextElementSibling.nextElementSibling.style.top = '50%'
                _h2[2].style.bottom = '-200px'
                _h2[2].nextElementSibling.style.bottom = '-200px'

            }

        })