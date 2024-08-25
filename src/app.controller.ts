import { Controller, Get, Header, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { Bundle } from './bundles/bundle';
import { Meta } from './bundles/meta';
import { Identifier } from './bundles/identifier';
import { Composition } from './bundles/composition';
import { Entry } from './bundles/entry';
import { Type } from './bundles/type';
import { System } from './bundles/system';
import { EntryReference } from './bundles/entry-reference';
import { Reference } from './bundles/reference';
import { Observation } from './bundles/observation';
import { Notes } from './bundles/notes';
import { Specimen } from './bundles/specimen';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHello(): string {
    const bundle = new Bundle()
      .setType('document')
      .setTimestamp(new Date().toISOString())
      .setResourceType('Bundle')
      .setMeta(new Meta().setLastUpdated(new Date().toISOString()))
      .setIdentifier(
        new Identifier()
          .setSystem(
            'http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-<preencha-aqui-id-solicitacao>',
          )
          .setValue('765345678987654345678'),
      )
      .pushEntry(
        new Entry().setFullUrl('urn:uuid:transient-0').setResource(
          new Composition()
            .setResourceType('Composition')
            .setMeta(
              new Meta().setProfile([
                'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRResultadoExameLaboratorial-2.0',
              ]),
            )
            .setStatus('final')
            .setType(
              new Type().setCoding(
                new System()
                  .setSystem(
                    'http://www.saude.gov.br/fhir/r4/CodeSystem/BRTipoDocumento',
                  )
                  .setCode('REL'),
              ),
            )
            .setSubject(
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRIndividuo-1.0',
                )
                .setValue('700500572752652'),
            )
            .setDate(new Date().toISOString())
            .setAuthor([
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRPessoaJuridicaProfissionalLiberal-1.0',
                )
                .setValue('00394544000185'),
            ])
            .setTitle('Resultado de Exame Laboratorial')
            .setSection(
              new EntryReference<Reference>().setEntry(
                new Reference().setReference('urn:uuid:transient-1'),
              ),
            ),
        ),
      )
      .pushEntry(
        new Observation()
          .setMeta(
            new Meta().setProfile([
              'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRDiagnosticoLaboratorioClinico-2.0',
            ]),
          )
          .setStatus('final')
          .setCategory([
            new Identifier()
              .setSystem(
                'http://www.saude.gov.br/fhir/r4/CodeSystem/BRSubgrupoTabelaSUS',
              )
              .setValue('0214'),
          ])
          .setCode(
            new Type().setCoding(
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/CodeSystem/BRNomeExameGAL',
                )
                .setValue('coronavirusnCoV'),
            ),
          )
          .setSubject(
            new Identifier()
              .setSystem(
                'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRIndividuo-1.0',
              )
              .setValue('700500572752652'),
          )
          .setEffectiveDateTime(new Date().toISOString())
          .setIssued(new Date().toISOString())
          .setPerformer(
            new Type().setCoding(
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/CodeSystem/BRResultadoQualitativoExame',
                )
                .setValue('3'),
            ),
          )
          .setInterpretation([
            new Type().setCoding(
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/CodeSystem/BRResultadoQualitativoExame',
                )
                .setValue('2'),
            ),
          ])
          .setNote([new Notes().setText('teste')])
          .setMethod(new Notes().setText('teste1'))
          .setSpecimen(new Reference().setReference('urn:uuid:transient-2'))
          .setReferenceRange([new Notes().setText('teste')]),
      )
      .pushEntry(
        new Specimen()
          .setMeta(
            new Meta().setProfile([
              'http://www.saude.gov.br/fhir/r4/StructureDefinition/BRAmostraBiologica-1.0',
            ]),
          )
          .setType(
            new Type().setCoding(
              new Identifier()
                .setSystem(
                  'http://www.saude.gov.br/fhir/r4/CodeSystem/BRTipoAmostraGAL',
                )
                .setValue('SECONF'),
            ),
          ),
      );

    return JSON.stringify(bundle);
  }
}
