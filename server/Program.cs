using server.Application.Configurations;
using server.Infrastructure.Persistence;
using server.Infrastructure.Repositories.GenericRepository;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

builder.Services.AddUseCaseServices();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "corsPolicy",
        builder =>
            builder
                .WithOrigins("http://localhost:5173")
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                .WithMethods("GET", "PUT", "POST", "DELETE")
                .AllowAnyHeader()
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("corsPolicy");

app.Run();
