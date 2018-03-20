export interface ConvertorInterface<Model, SwaggerModel> {
  convertToSwagger(model: Model): SwaggerModel;

  convertFromSwagger(model: SwaggerModel): Model;
}
