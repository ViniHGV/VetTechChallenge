using System.Linq.Expressions;

namespace server.Infrastructure.Repositories.GenericRepository
{
    public interface IGenericRepository<T>
        where T : class
    {
        Task<List<T>> GetAllAsync(Expression<Func<T, bool>>? filter = null, bool tracked = true);
        Task<T> GetAsync(Expression<Func<T, bool>>? filter = null, bool tracked = true);
        Task CreateAsync(T entity);
        Task RemoveAsync(T entity);
        Task Update(T entity);
        Task SaveAsync();
        IQueryable<T> Include(params Expression<Func<T, object>>[] includes);
    }
}
