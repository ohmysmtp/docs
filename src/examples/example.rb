require 'net/http'
require 'uri'
require 'json'

uri = URI.parse('https://app.mailpace.com/api/v1/send')
request = Net::HTTP::Post.new(uri)
request.content_type = 'application/json'
request['Accept'] = 'application/json'
request['Ohmysmtp-Server-Token'] = '6b6dbe32-012d-4fd4-8bd1-2276f6e1de8c'
request.body = JSON.dump(
  {
    'from' => 'SOMEONE@google.com',
    'to' => 'SOMEONE@SOMEWHERE.com',
    'subject' => 'Hello from MailPace.com',
    'textbody' => 'HTML Body is auto-generated'
  }
)

req_options = {
  use_ssl: uri.scheme == 'https',
}

response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end

puts response.code
puts response.body