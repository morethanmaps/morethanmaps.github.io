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

