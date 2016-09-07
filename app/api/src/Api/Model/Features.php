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

    public function gettyImages() // gets the oAuth token
    {
        // $features = ['arrayNox','noximus'];
        $features = []; // turn into object not an array
        
        $apiKey = "ckmsjqeajekch5qwd2fuhg9t";
        $apiSecret = "vn8Bdgkd6JcM5NKN72nSWxWyQmWgCP8YTYDkBVwwKn9Ye";

        $sdk = new GettyImages_Client($apiKey,$apiSecret);

        $response = $sdk->Search()->Images()->withPhrase("fashion week")->withResponseField("comp")->execute();
        // $response = $sdk->Search()->Images()->withPhrase("fashion")->execute();

        // $response = $sdk->Images()->withId('533259331')->execute();
        
        $features = json_decode($response);

        return $features;
    }
    // public function getImagesWithID($Id)
    // {
    //     $gettyImage = []; // turn into object not an array
    //     $apiKey = "ckmsjqeajekch5qwd2fuhg9t";
    //     $apiSecret = "vn8Bdgkd6JcM5NKN72nSWxWyQmWgCP8YTYDkBVwwKn9Ye";

    //     $sdk = new GettyImages_Client($apiKey,$apiSecret);

    //     // $responseWImage = $sdk->Images()->withId($Id)->execute();

        

    //     // $responseWImage = $sdk->Images()->withId($Id)->execute();
        
    //     // $gettyImage = json_decode($responseWImage);
    //     // $gettyImage = $id;

    //     return $gettyImage;
    // }
}
