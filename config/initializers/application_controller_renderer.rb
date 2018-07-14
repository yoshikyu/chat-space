# Be sure to restart your server when you modify this file.

# ApplicationController.renderer.defaults.merge!(
#   http_host: 'example.org',
#   https: false
# )
Time::DATE_FORMATS[:default] = '%Y/%m/%d %H:%M'

def format_posted_time(time)
	time.to_s(:default)
end
