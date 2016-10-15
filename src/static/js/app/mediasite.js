import { Song } from './mediacodec';
import React from 'react';
import {render} from 'react-dom';

import MaterializeSelect from './components/materialize/Select';

const testDataJson = {
    "id": 3708,
    "parts": [
        {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 18,
                            "note": "Em7"
                        }, {
                            "position": 22,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                },
                {
                    "note": [],
                    "lyric": "Praise to You, God"
                },
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 19,
                            "note": "Em7"
                        }, {
                            "position": 23,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Father of our Lord"
                }, {
                    "note": [
                        {
                            "position": 7,
                            "note": "C"
                        }, {
                            "position": 11,
                            "note": "G/B"
                        }, {
                            "position": 19,
                            "note": "Am7"
                        }, {
                            "position": 24,
                            "note": "Am7/G"
                        }, {
                            "position": 30,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "For great is Your mercy    on us"
                }
            ],
            "partName": "Verse 1"
        }, {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 6,
                            "note": "D4/F#"
                        }, {
                            "position": 18,
                            "note": "Em7"
                        }, {
                            "position": 22,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Praise to You, God"
                }, {
                    "note": [
                        {
                            "position": 1,
                            "note": "G5"
                        }, {
                            "position": 12,
                            "note": "D4/F#"
                        }, {
                            "position": 26,
                            "note": "Em7"
                        }, {
                            "position": 30,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "You've given us new birth"
                }, {
                    "note": [
                        {
                            "position": 3,
                            "note": "C"
                        }, {
                            "position": 8,
                            "note": "G/B"
                        }, {
                            "position": 18,
                            "note": "Am7"
                        }, {
                            "position": 22,
                            "note": "Am7/G"
                        }, {
                            "position": 38,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "Into a living hope       through Your Son"
                }
            ],
            "partName": "Verse 2"
        }, {
            "partData": [
                {
                    "note": [
                        {
                            "position": 1,
                            "note": "C"
                        }, {
                            "position": 4,
                            "note": "D"
                        }, {
                            "position": 8,
                            "note": "Em"
                        }, {
                            "position": 11,
                            "note": "D"
                        }, {
                            "position": 13,
                            "note": "C"
                        }, {
                            "position": 19,
                            "note": "D"
                        }, {
                            "position": 32,
                            "note": "Em"
                        }, {
                            "position": 35,
                            "note": "D"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "In You      we greatly rejoice"
                }, {
                    "note": [
                        {
                            "position": 1,
                            "note": "C"
                        }, {
                            "position": 4,
                            "note": "D"
                        }, {
                            "position": 8,
                            "note": "Em"
                        }, {
                            "position": 11,
                            "note": "D"
                        }, {
                            "position": 21,
                            "note": "C"
                        }, {
                            "position": 30,
                            "note": "D"
                        }, {
                            "position": 40,
                            "note": "G5"
                        }, {
                            "position": 43,
                            "note": "D4/F#"
                        }, {
                            "position": 49,
                            "note": "Em7"
                        }, {
                            "position": 53,
                            "note": "D4/F#"
                        }
                    ],
                    "lyric": null
                }, {
                    "note": [],
                    "lyric": "In You    we have joy in a living hope"
                }
            ],
            "partName": "Chorus"
        }
    ],
    "title": "A Living Hope",
    "key": "G",
    "partCount": 3
};

const aLivingHope = new Song(3708, 'A Living Hope', 'G', testDataJson);
//
// const SongSheet = ({songer}) => {
//   return (
//     <div dangerouslySetInnerHTML={{__html: songer.toHtml('C')}}>
//     </div>
//   )
// };


class SongSheet extends React.Component {
  state = {
    songKey: 'Bb',
    textSize: '16px'
  }

  updateChosenSongKey(event) {
    this.setState({ songKey: event.target.value });
  }

  updateChosenTextSize(event) {
    this.setState({ textSize: event.target.value });
  }

  render() {
    const { songer } = this.props;

    const songKeyOptions = [
      <option key='A' value='A'>A</option>,
      <option key='B' value='B'>B</option>,
      <option key='C' value='C'>C</option>
    ];
    const textSizeOptions = [
      <option key='14px' value='14px'>14px</option>,
      <option key='16px' value='16px'>16px</option>,
      <option key='18px' value='18px'>18px</option>
    ];
    return (
      <div>
        <MaterializeSelect
          selectValue={this.state.songKey}
          options={songKeyOptions}
          label="Song Key"
          handleOnSelect={this.updateChosenSongKey.bind(this)}
        />
        <MaterializeSelect
          selectValue={this.state.textSize}
          options={textSizeOptions}
          label="Text Size"
          handleOnSelect={this.updateChosenTextSize.bind(this)}
        />
        <div dangerouslySetInnerHTML={{__html: songer.toHtml(this.state.songKey)}}></div>
      </div>
    )
  }
};


// document.getElementById('mediasite').innerHTML = aLivingHope.toHtml('D');
render(<SongSheet songer={aLivingHope} />, document.getElementById('mediasite'));

// import 'materialize-css';
// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, IndexRoute, Link, History, browserHistory } from 'react-router';
//
// import {
//     Login,
//     Logout,
//     Song,
//     FilterableSongTable,
//     GenerateSongSheet,
//     MediasiteHeader,
//     Welcome
// } from './pages';
// import auth from './auth';
// import MediasiteApi from './api/MediasiteApi';
//
// class App extends React.Component {
//   state = {
//     loggedIn: auth.loggedIn(),
//     user: null
//   };
//
//   updateAuth = (loggedIn) => {
//     let newState = {
//       loggedIn: loggedIn
//     };
//     if (!loggedIn && this.state.loggedIn && this.state.user !== null) {
//       newState.user = null;
//     }
//     this.setState(newState);
//   };
//
//   componentDidMount() {
//     this.loadUserInfo();
//     $('.button-collapse').sideNav();
//   }
//
//   componentDidUpdate() {
//     this.loadUserInfo();
//   }
//
//   componentWillMount() {
//     auth.onChange = this.updateAuth;
//     auth.login();
//   }
//
//   loadUserInfo() {
//     this.setState({
//       user: {
//         'title': 'Dude',
//         'profilePicture': '',
//         'firstName': 'Graham',
//         'lastName': 'Holtslander',
//         'email': 'b@b.com'
//       }
//     });
//     if (false && this.state.user === null && this.state.loggedIn) {
//       MediasiteApi.getUserInfo(localStorage.userId, (userInfo) => {
//         this.setState({
//           user: {
//             'title': userInfo.data.title,
//             'profilePicture': userInfo.data.profile_picture,
//             'firstName': userInfo.data.first_name,
//             'lastName': userInfo.data.last_name,
//             'email': userInfo.data.email
//           }
//         });
//       });
//     }
//   }
//
//   render() {
//     return (
//       <div className='mediasite'>
//         <MediasiteHeader loggedIn={this.state.loggedIn} user={this.state.user} />
//         <div className='container'>
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// }
//
// function requireAuth(nextState, replace) {
//   if (!auth.loggedIn()) {
//     replace(`/login?nextPathName=${nextState.location.pathname}`)
//   }
// }
//
// // ReactDOM.render
// render((
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={!auth.loggedIn() ? Login : Welcome} />
//       <Route path='welcome' component={Welcome} onEnter={requireAuth} />
//       <Route path='songs' component={FilterableSongTable} onEnter={requireAuth} />
//       <Route path='song/:songId' component={Song} onEnter={requireAuth} />
//       <Route path='song/:songId/print' component={GenerateSongSheet} onEnter={requireAuth} />
//       <Route path='login' component={Login} />
//       <Route path='logout' component={Logout} />
//     </Route>
//   </Router>
// ), document.getElementById('mediasite'));
