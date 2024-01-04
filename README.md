# More than maps - Australia

Our aim is to enable student's to use state-of-the-art geospatial techniques to understand climate change impacts on our coastlines.

We've developed a series of workshops that demonstrate how you can combine satellite images, geospatial technologies, and socio-economic data to identify the fingerprint of climatic hazards on coastal regions and strategies to adapt to these challenges.

Find the workshops at: https://morethanmaps.earth

What will you learn?
You will learn techniques to analyse satellite and socio-economic data to identify the effect of climatic hazards on coastal ecosystems and communities. In these workshops, you will work with data collected from aeroplanes, cubesats, NASA's satellites, and collected by researcher's working with affected communities.

At the end of these workshops you will know how to detect damaged buildings from aerial images right after a tropical cyclone has passed through, tease out the change in mangrove vigour after marine heatwaves, and model how people's livelihoods change when climatic hazards damage ecosystems.

The case studies:
* Building damage in Kalbarri after Tropical Cyclone Seroja, Western Australia
* Mangrove dieback in the Gulf of Carpenteria, Northern Territory
* Tropical Cyclone Winston's impacts on mangrove ecosystem services in Ba, Fiji
* Partners in the UK, Ghana, and Jamaica are developing and running similar workshops as part of the UK/Australia Season 2021-22 supported by the British Council.

## Build workshop website using Jekyll

Update command line tools:

```
xcode-select --install
```

Set SKDROOT (see [here](https://jekyllrb.com/docs/installation/macos/#set-sdkroot-only-macos-catalina-or-later)):

```
export SDKROOT=$(xcrun --show-sdk-path)
```

Install ruby:

```
brew install ruby
```

```
# If you're using Zsh
echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.zshrc
```

Install bundler and jekyll gems:

```
gem install --user-install bundler jekyll
```

Add gem paths and replace `X.X` with first two digits of ruby version (`ruby -v`):

```
# If you're using Zsh
# echo 'export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc
```

## Existing project

If there is a Gemfile present, install gems in Gemfile:

```
bundle install
```

## New project

If there is no Gemfile (clean project), initialise bundler:

```
bundle init
```

Add jekyll

```
bundle add jekyll
```

## Test site

```
bundle exec jekyll serve
```

# Possible gotchas

Possible clash with ffi package on macOS, fix is to install ffi with `--disable-system-libffi ` set and then run `bundle install` again.

```
gem install ffi -v '1.15.3' -- --disable-system-libffi 
```

Ruby 3.0.0 no longer comes with webrick. This can cause `bundle exec jekyll serve` to fail. Fix:

```
bundle add webrick
```

