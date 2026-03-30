# Julioall/claris-ia

Este repositorio publico recebe somente o build estatico da aplicacao.

- Os arquivos publicados ficam em `site/`.
- Repositorio fonte privado: `Julioall/claris` @ `380e8ae00932ac3e7a93d245eaa3690afd7f20af`
- O codigo-fonte, migrations e logica sensivel permanecem no repositorio privado e nas Edge Functions.
- Alteracoes manuais neste repositorio podem ser sobrescritas no proximo deploy.

## Publicacao

O deploy do GitHub Pages e feito pelo workflow versionado neste repositorio, usando apenas os artefatos gerados no pipeline do repositorio privado.
