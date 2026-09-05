<!DOCTYPE html>
<html>

<head>
    <title>{{ $customization->title }}</title>
    <link rel="icon" href="{{ asset('asset/headerico.png') }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    @vite('resources/css/app.css')
</head>
<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

<body class="min-h-screen bg-no-repeat font-montserrat" style="{{ $customization->display_preview_bg }}">
    <div class="mx-auto overflow-hidden w-[420px] xl:w-[420px] h-[900px] xl:mt-0" style="z-index: -10 ; ">
        {{-- Container Utama --}}
        <div class="{{ $customization->display_preview_class }} overflow-y-auto "
            style="z-index: -4; {{ $customization->display_preview_fc }}" id="displayPreview">
            <div class="bg-gray-200">
                @if ($customization->banner)
                    <img class="object-cover h-[190px] w-full" src="{{ asset('storage/' . $customization->banner) }}"
                        id="bannerPreview" alt="Banner">
                @else
                    <img class="object-cover h-[190px] w-full" id="bannerPreview"
                        src="https://cdn.pixabay.com/photo/2018/03/15/08/54/grid-3227459_1280.jpg" alt="Banner">
                @endif
            </div>
            <div>
                <div class="w-24 mx-auto bg-gray-600 rounded-full">
                    @if ($customization->profile)
                        <img class="object-cover w-24 h-24 -mt-12 rounded-full text-bold"
                            src="{{ asset('storage/' . $customization->profile) }}" id="profilePreview" alt="Profile">
                    @else
                        <img class="object-cover w-24 h-24 -mt-12 rounded-full text-bold"
                            src="https://cdn.pixabay.com/photo/2018/03/15/08/54/grid-3227459_1280.jpg"
                            id="profilePreview" alt="Profile">
                    @endif
                </div>
                <h1 class="mb-2 text-xl font-bold text-center break-words whitespace-normal Title" id="titlePreview">
                    {{ $customization->title }}</h1>
                <p class="mb-4 text-center break-words whitespace-normal About" id="aboutPreview">
                    {{ $customization->about }}</p>
                <div id="linkContainer" class="flex flex-wrap justify-center p-2 mx-auto space-x-2 previewButtons">
                    @foreach ($socialButtons as $index => $socialButton)
                        <div class="mb-2 social-button-wrapper" data-id="{{ $index }}">
                            <a class="{{ $socialButton->icon }}" href="{{ $socialButton->url }}"></a>
                        </div>
                    @endforeach
                </div>
                <div id="buttonContainer" class="justify-center w-full px-2 mt-4 text-center">
                    @foreach ($linkButtons as $index => $linkButton)
                        <div class="mb-2 link-button-wrapper" data-id="{{ $index }}">
                            <div class="z-20 mx-auto w-[390px] h-[70px] flex items-center justify-center">
                                <a class="z-20 text-center link-buttons" href="{{ $linkButton->url }}"
                                    style="color:{{ $customization->display_btn_fontc }}">{{ $linkButton->text }}</a>
                            </div>
                            <div class="{{ $customization->display_btn_prop }}"
                                style="background: {{ $customization->display_btn_style }}">
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    <p class="text-center text-black dark:text-white font-semibold bottom-0 w-full">
        Powered by Campus Digital
    </p>
    
</body>
</html>
