"""
SDK for the City API
"""
import logging

import requests

from settings import THE_CITY_APP_ID, THE_CITY_APP_SECRET, THE_CITY_OAUTH_CALLBACK_URI, THE_CITY_OAUTH_TOKEN_GET_URI, \
    THE_CITY_ME_PERMISSIONS_URI, THE_CITY_ME_URI, THE_CITY_AUTHORIZATION_URI


class TheCitySDK(object):

    def __init__(self, access_token):
        self.access_token = access_token

    @staticmethod
    def _get(url, url_params=None):
        logging.info(url)
        logging.info(url_params)
        return requests.get(url, params=url_params)

    @staticmethod
    def _post(url, data):
        logging.info(url)
        try:
            response = requests.post(url, data=data)

            logging.info(response)

            return response.json()
        except Exception as e:
            pass

    @staticmethod
    def post_for_user_token(code):
        post_data = {
            'grant_type': 'authorization_code',
            'code': code,
            'client_id': THE_CITY_APP_ID,
            'client_secret': THE_CITY_APP_SECRET,
            'redirect_uri': THE_CITY_OAUTH_CALLBACK_URI
        }

        return TheCitySDK._post(THE_CITY_OAUTH_TOKEN_GET_URI, post_data)

    def authed_get(self, url):
        return requests.get(url, headers={
            'accept': 'application/vnd.thecity.v1+json',
            'X-THECITY-ACCESS-TOKEN': self.access_token,
            'X-THECITY-SUBDOMAIN': 'cdac',
        })

    def get_basic_user_info(self):
        user_info = self._get(THE_CITY_AUTHORIZATION_URI, url_params={'access_token': self.access_token})
        if user_info:
            return user_info.json()['users'][0]

    def get_user_info(self):
        user_json = self.authed_get(THE_CITY_ME_URI).json()
        logging.info(user_json)
        return user_json

    def get_user_permissions(self):
        perms_json = self.authed_get(THE_CITY_ME_PERMISSIONS_URI).json()
        logging.info(perms_json)
        return perms_json

    @staticmethod
    def user_is_in_worship_arts(user_info):
        """
        Groups allowed (so far):
            104999 - WA Band and Vocals
            104934 - WA Technical Team
            100800 - WA Audio Team
            107330 - WA Handbells
            104932 - WA Design team
        Or anyone who is "staff".
        """
        return len([post_type for post_type, groups in user_info['can_create_in_group_ids'].iteritems()
                    if any([104999 in groups,
                            104934 in groups,
                            100800 in groups,
                            107330 in groups,
                            104932 in groups])]) > 0 or user_info['staff']


class TheCitySDKException(Exception):
    """
    Raised for The City api issues
    """
