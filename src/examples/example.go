package main

import "bytes"
import "net/http"
import "encoding/json"

func main() {

	type Payload struct {
		From     string `json:"from"`
		To       string `json:"to"`
		Subject  string `json:"subject"`
		Textbody string `json:"textbody"`
	}

	data := Payload{
		From: "SOMEONE@google.com",
    To: "SOMEONE@SOMEWHERE.com",
    Subject:  "Hello from MailPace.com",
    Textbody: "HTML Body is auto-generated",
	}
	payloadBytes, err := json.Marshal(data)
	if err != nil {
		// handle err
	}
	body := bytes.NewReader(payloadBytes)

	req, err := http.NewRequest("POST", "https://app.mailpace.com/api/v1/send", body)
	if err != nil {
		// handle err
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Ohmysmtp-Server-Token", "api-token-here")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		// handle err
	}
	defer resp.Body.Close()

}