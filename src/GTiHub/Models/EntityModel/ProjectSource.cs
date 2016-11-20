namespace GTiHub.Models.EntityModel
{
    public class ProjectSource : BaseEntity
    {
        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }

        public virtual Source Source { get; set; }

        public int SourceId { get; set; }
    }
}