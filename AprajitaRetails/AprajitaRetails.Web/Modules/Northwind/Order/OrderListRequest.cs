using Serenity.Services;

namespace AprajitaRetails.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}