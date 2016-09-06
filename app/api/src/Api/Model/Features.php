<?php

namespace Api\Model;

use GettyImages\Api\GettyImages_Client;

class Features
{
    protected $features;

    public function __construct($features)
    {
        $this->features = $features;
    }

    public function gettyImages()
    {
        // $features = ['arrayNox','noximus'];
        $features = []; // turn into object not an array
        $apiKey = "ckmsjqeajekch5qwd2fuhg9t";
        $apiSecret = "vn8Bdgkd6JcM5NKN72nSWxWyQmWgCP8YTYDkBVwwKn9Ye";

        $sdk = new GettyImages_Client($apiKey,$apiSecret);

        $response = $sdk->Search()->Images()->withPhrase("dog")->execute();

        // var_dump($response);
// array_replace_recursive($response);
        $features = $response;
        
        // json_encode($response);
        // echo $features;

        return $features;
    }
}
