import React from 'react'

export default function Footer() {
    return (
        <footer class="bd-footer  xs-5 bg-body-tertiary">
  <div class="container py-md-5 px-4 text-body-secondary">
    <div class="row">
      <div class="col-xs-3 xs-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
         
          <span class="fs-5">Bootstrap</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/{{ .Site.Params.docs_version }}/about/team/">Bootstrap team</a> with the help of <a href="{{ .Site.Params.repo }}/graphs/contributors">our contributors</a>.</li>
          <li class="mb-2">Code licensed <a href="{{ .Site.Params.repo }}/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
        
        </ul>
      </div>
      
      
    </div>
  </div>
</footer>
    )
}
